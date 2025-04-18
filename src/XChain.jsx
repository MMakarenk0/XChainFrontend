import React from 'react';

const CryptoExchange = () => {
  return (
    <div className="container mx-auto">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">CryptoXchange</h1>
        <p className="text-lg mt-2">Торгуй криптовалютами прямо из Telegram!</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-4 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Обзор рынка</h2>
          <div className="mt-4">
            {/* Здесь будет отображаться информация о рынках */}
            <p>Текущие рыночные данные...</p>
          </div>
        </div>

        <div className="card p-4 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Создание ордера</h2>
          <div className="mt-4">
            {/* Здесь можно будет разместить форму для создания ордера */}
            <button className="btn btn-primary">Разместить ордер</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoExchange;
