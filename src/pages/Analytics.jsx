import React, { useState, useEffect } from 'react';
import { Search, Filter, Download, TrendingUp, TrendingDown, BarChart3, ShoppingCart, DollarSign, Plus, Minus } from 'lucide-react';
import { stocksData } from '../data/data';

const Analytics = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('marketCap');
  const [sortOrder, setSortOrder] = useState('desc');
  const [portfolio, setPortfolio] = useState([]);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check user authentication
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Load portfolio from localStorage
    const savedPortfolio = localStorage.getItem('portfolio');
    if (savedPortfolio) {
      setPortfolio(JSON.parse(savedPortfolio));
    }

    // Simulate real-time price updates
    const interval = setInterval(() => {
      updateStockPrices();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const updateStockPrices = () => {
    // Simulate market price fluctuations
    stocksData.forEach(stock => {
      const change = (Math.random() - 0.5) * 2; // Random change between -1 and 1
      const newPrice = Math.max(stock.price + change, 1); // Ensure price doesn't go below 1
      const priceChange = newPrice - stock.price;
      const percentChange = (priceChange / stock.price) * 100;
      
      stock.price = parseFloat(newPrice.toFixed(2));
      stock.change = parseFloat(priceChange.toFixed(2));
      stock.changePercent = parseFloat(percentChange.toFixed(2));
    });
  };

  const exportData = () => {
    const dataToExport = {
      stocks: stocksData,
      portfolio: portfolio,
      exportDate: new Date().toISOString(),
      user: user?.name || 'Guest'
    };

    // Create CSV content
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Add headers
    csvContent += "Symbol,Name,Price,Change,Change%,Volume,MarketCap,Sector,Portfolio Quantity,Portfolio Value\n";
    
    // Add stock data
    stocksData.forEach(stock => {
      const portfolioItem = portfolio.find(p => p.symbol === stock.symbol);
      const quantity = portfolioItem ? portfolioItem.quantity : 0;
      const portfolioValue = quantity * stock.price;
      
      csvContent += `${stock.symbol},${stock.name},${stock.price},${stock.change},${stock.changePercent},${stock.volume},${stock.marketCap},${stock.sector},${quantity},${portfolioValue.toFixed(2)}\n`;
    });

    // Create and download file
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `bluestock_analytics_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Also create JSON export
    const jsonContent = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToExport, null, 2));
    const jsonLink = document.createElement("a");
    jsonLink.setAttribute("href", jsonContent);
    jsonLink.setAttribute("download", `bluestock_data_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(jsonLink);
    jsonLink.click();
    document.body.removeChild(jsonLink);

    alert('Data exported successfully! Check your downloads folder for CSV and JSON files.');
  };

  const handleBuyStock = (stock) => {
    if (!user) {
      alert('Please login to trade stocks');
      return;
    }
    setSelectedStock(stock);
    setShowBuyModal(true);
  };

  const handleSellStock = (stock) => {
    if (!user) {
      alert('Please login to trade stocks');
      return;
    }
    
    const portfolioItem = portfolio.find(p => p.symbol === stock.symbol);
    if (!portfolioItem || portfolioItem.quantity === 0) {
      alert('You don\'t own any shares of this stock');
      return;
    }
    
    setSelectedStock(stock);
    setShowBuyModal(true);
  };

  const executeTrade = (action, quantity, price) => {
    const existingIndex = portfolio.findIndex(p => p.symbol === selectedStock.symbol);
    let newPortfolio = [...portfolio];

    if (action === 'buy') {
      if (existingIndex >= 0) {
        newPortfolio[existingIndex].quantity += quantity;
        newPortfolio[existingIndex].avgPrice = 
          ((newPortfolio[existingIndex].avgPrice * (newPortfolio[existingIndex].quantity - quantity)) + 
           (price * quantity)) / newPortfolio[existingIndex].quantity;
      } else {
        newPortfolio.push({
          symbol: selectedStock.symbol,
          name: selectedStock.name,
          quantity: quantity,
          avgPrice: price,
          purchaseDate: new Date().toISOString()
        });
      }
    } else if (action === 'sell') {
      if (existingIndex >= 0) {
        newPortfolio[existingIndex].quantity -= quantity;
        if (newPortfolio[existingIndex].quantity <= 0) {
          newPortfolio.splice(existingIndex, 1);
        }
      }
    }

    setPortfolio(newPortfolio);
    localStorage.setItem('portfolio', JSON.stringify(newPortfolio));
    setShowBuyModal(false);
    setSelectedStock(null);
  };

  const getPortfolioQuantity = (symbol) => {
    const portfolioItem = portfolio.find(p => p.symbol === symbol);
    return portfolioItem ? portfolioItem.quantity : 0;
  };

  const getPortfolioValue = () => {
    return portfolio.reduce((total, item) => {
      const currentStock = stocksData.find(s => s.symbol === item.symbol);
      return total + (item.quantity * (currentStock?.price || 0));
    }, 0);
  };

  const getPortfolioPnL = () => {
    return portfolio.reduce((total, item) => {
      const currentStock = stocksData.find(s => s.symbol === item.symbol);
      if (!currentStock) return total;
      const currentValue = item.quantity * currentStock.price;
      const investedValue = item.quantity * item.avgPrice;
      return total + (currentValue - investedValue);
    }, 0);
  };

  const filteredStocks = stocksData
    .filter(stock => 
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      return sortOrder === 'desc' ? bVal - aVal : aVal - bVal;
    });

  const formatNumber = (num) => {
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toString();
  };

  const TradingModal = () => {
    const [action, setAction] = useState('buy');
    const [quantity, setQuantity] = useState(1);
    const portfolioQty = getPortfolioQuantity(selectedStock?.symbol);

    const handleTrade = () => {
      if (action === 'sell' && quantity > portfolioQty) {
        alert('Insufficient shares to sell');
        return;
      }
      executeTrade(action, quantity, selectedStock.price);
    };

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '2rem',
          width: '90%',
          maxWidth: '500px'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Trade {selectedStock?.symbol}
          </h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ color: '#64748b', marginBottom: '0.5rem' }}>Current Price</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
              ${selectedStock?.price.toFixed(2)}
            </p>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
              You own: {portfolioQty} shares
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <button
              onClick={() => setAction('buy')}
              style={{
                flex: 1,
                padding: '0.75rem',
                background: action === 'buy' ? '#10b981' : '#f1f5f9',
                color: action === 'buy' ? 'white' : '#64748b',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Buy
            </button>
            <button
              onClick={() => setAction('sell')}
              style={{
                flex: 1,
                padding: '0.75rem',
                background: action === 'sell' ? '#ef4444' : '#f1f5f9',
                color: action === 'sell' ? 'white' : '#64748b',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Sell
            </button>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Quantity
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                <Minus size={16} />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontSize: '1rem'
                }}
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div style={{ 
            background: '#f8fafc', 
            padding: '1rem', 
            borderRadius: '8px',
            marginBottom: '1.5rem'
          }}>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Total Amount</p>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c' }}>
              ${(quantity * selectedStock?.price).toFixed(2)}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => setShowBuyModal(false)}
              style={{
                flex: 1,
                padding: '0.75rem',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleTrade}
              style={{
                flex: 1,
                padding: '0.75rem',
                background: action === 'buy' ? '#10b981' : '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              {action === 'buy' ? 'Buy' : 'Sell'} {quantity} Share{quantity > 1 ? 's' : ''}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '12px', 
          marginBottom: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.5rem' }}>
                Stock Analytics & Trading
              </h1>
              <p style={{ color: '#64748b' }}>
                Real-time market data with buy/sell functionality
              </p>
            </div>
            <button 
              onClick={exportData}
              style={{
                background: '#4F46E5',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Download size={16} />
              Export Data
            </button>
          </div>

          {/* Portfolio Summary */}
          {user && portfolio.length > 0 && (
            <div style={{ 
              background: '#f0f4ff', 
              padding: '1.5rem', 
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a202c', marginBottom: '1rem' }}>
                Your Portfolio
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Total Value</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c' }}>
                    ${getPortfolioValue().toFixed(2)}
                  </p>
                </div>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem' }}>P&L</p>
                  <p style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    color: getPortfolioPnL() >= 0 ? '#10b981' : '#ef4444'
                  }}>
                    {getPortfolioPnL() >= 0 ? '+' : ''}${getPortfolioPnL().toFixed(2)}
                  </p>
                </div>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Holdings</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c' }}>
                    {portfolio.length} stocks
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Search and Filter */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: '1', minWidth: '300px' }}>
              <Search size={20} style={{ 
                position: 'absolute', 
                left: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#64748b'
              }} />
              <input
                type="text"
                placeholder="Search stocks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                background: 'white',
                cursor: 'pointer'
              }}
            >
              <option value="marketCap">Market Cap</option>
              <option value="price">Price</option>
              <option value="changePercent">Change %</option>
              <option value="volume">Volume</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
              style={{
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                background: 'white',
                cursor: 'pointer'
              }}
            >
              {sortOrder === 'desc' ? '↓' : '↑'}
            </button>
          </div>
        </div>

        {/* Analytics Table */}
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Symbol</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Name</th>
                  <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#374151' }}>Price</th>
                  <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#374151' }}>Change</th>
                  <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#374151' }}>Change %</th>
                  <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#374151' }}>Holdings</th>
                  <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#374151' }}>Market Cap</th>
                  <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: '#374151' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStocks.map((stock, index) => {
                  const portfolioQty = getPortfolioQuantity(stock.symbol);
                  return (
                    <tr key={stock.symbol} style={{ 
                      borderBottom: '1px solid #f1f5f9',
                      background: portfolioQty > 0 ? '#f0fdf4' : 'white'
                    }}>
                      <td style={{ padding: '1rem', fontWeight: '600', color: '#4F46E5' }}>
                        {stock.symbol}
                      </td>
                      <td style={{ padding: '1rem', color: '#1a202c' }}>
                        {stock.name}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#1a202c' }}>
                        ${stock.price.toFixed(2)}
                      </td>
                      <td style={{ 
                        padding: '1rem', 
                        textAlign: 'right', 
                        color: stock.change >= 0 ? '#10b981' : '#ef4444',
                        fontWeight: '600'
                      }}>
                        {stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}
                      </td>
                      <td style={{ 
                        padding: '1rem', 
                        textAlign: 'right', 
                        color: stock.changePercent >= 0 ? '#10b981' : '#ef4444',
                        fontWeight: '600'
                      }}>
                        {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'right', color: '#64748b' }}>
                        {portfolioQty > 0 ? `${portfolioQty} shares` : '-'}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'right', color: '#64748b' }}>
                        ${formatNumber(stock.marketCap)}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                          <button
                            onClick={() => handleBuyStock(stock)}
                            style={{
                              background: '#10b981',
                              color: 'white',
                              border: 'none',
                              padding: '0.5rem 1rem',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontSize: '0.875rem',
                              fontWeight: '600'
                            }}
                          >
                            Buy
                          </button>
                          {portfolioQty > 0 && (
                            <button
                              onClick={() => handleSellStock(stock)}
                              style={{
                                background: '#ef4444',
                                color: 'white',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                fontWeight: '600'
                              }}
                            >
                              Sell
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#10b981', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {filteredStocks.filter(s => s.changePercent > 0).length}
            </h3>
            <p style={{ color: '#64748b' }}>Gainers</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#ef4444', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {filteredStocks.filter(s => s.changePercent < 0).length}
            </h3>
            <p style={{ color: '#64748b' }}>Losers</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#4F46E5', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {portfolio.length}
            </h3>
            <p style={{ color: '#64748b' }}>Your Holdings</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#f59e0b', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              ${user ? getPortfolioValue().toFixed(0) : '0'}
            </h3>
            <p style={{ color: '#64748b' }}>Portfolio Value</p>
          </div>
        </div>
      </div>

      {/* Trading Modal */}
      {showBuyModal && selectedStock && <TradingModal />}
    </div>
  );
};

export default Analytics;