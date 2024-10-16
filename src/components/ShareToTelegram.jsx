import { useState } from "react";

const ShareToTelegram = () => {
  const [telegramLink, setTelegramLink] = useState("");

  // Функция для формирования ссылки
  const getTelegramLink = () => {
    // Получаем текст из элементов
    const h1Text = document.querySelector("h1")?.innerText || "";
    const h2Text = document.querySelector("h2")?.innerText || "";
    const h3Text = document.querySelector("h3")?.innerText || "";
    const h4Text = document.querySelector("h4")?.innerText || "";
    const articleText = document.querySelector("article")?.innerText || "";

    // Объединяем текст
    const combinedText = `${h1Text} ${h2Text} ${h3Text} ${h4Text} ${articleText}`;
    const currentUrl = window.location.href;

    // Формируем ссылку для Telegram
    const link = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=Ежедневник АИЗ: ${encodeURIComponent(combinedText)}`;
    setTelegramLink(link);
  };

  return (
    <div>
      {/* Кнопка для обновления ссылки */}
      <button onClick={getTelegramLink} className="text-blue-600">
        Получить ссылку для дележа
      </button>

      {/* Кнопка для дележа в Telegram */}
      {telegramLink && (
        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 flex items-center gap-1 ring-1 ring-blue-400/50 bg-blue-100 rounded-lg px-4 py-1.5 hover:text-blue-700"
        >
          <span>Поделиться в группе</span>
        </a>
      )}
    </div>
  );
};

export default ShareToTelegram;
