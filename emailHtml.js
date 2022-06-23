function fn(weatherData, lifeData, word, imgurl, lovingDays,content,xingzuoyunshi) {
  const { daily: weatherDataDaily } = weatherData;
  const { daily } = lifeData;

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div>
        <!-- 天数 -->
        <div>
          <p>亲爱的方方同学，见字如晤，今天是我们在一起的第${lovingDays}天，也是我们在努力克服异地恋的第${lovingDays}天！希望你今天拥有一整天的好心情，欢迎你随时点开与我的聊天框，我一直都在！</p>
          </div>
        <!-- 图片 -->
        <div>
          <img
            style="width: 100%; max-width: 768px"
            src="${imgurl}"
            alt="图片"
          />
        </div>
        <!-- 每日一句 -->
        <div>
          <p style="font-size: 14px; text-indent: 2em; font-style: italic;">
            ${content}
          </p>
        </div>
        <!-- 天气 -->
        <p>请查收今日天气与星座运势！</p>
        <div>
          <p>
            <b>今日气温:</b>
            <span>${weatherDataDaily[0].tempMin}°C - ${weatherDataDaily[0].tempMax}°C</span>
          </p>
          <ul>
            <li style="margin-bottom: 10px">
              ${daily[1].name}(${daily[1].category}):
              ${daily[1].text}
            </li>
            <li style="margin-bottom: 10px">
              ${daily[2].name}(${daily[2].category}):
              ${daily[2].text}
            </li>
            <li style="margin-bottom: 10px">
              ${daily[0].name}(${daily[0].category}):
              ${daily[0].text}
            </li>
          </ul>
        </div>
      </div>
      <div>
          <p>
            <b>摩羯座今日运势:</b>
          </p>
          <ul>
            <li style="margin-bottom: 10px">
              ${xingzuoyunshi[0].type}：(${xingzuoyunshi[0].content})
            </li>
            <li style="margin-bottom: 10px">
              ${xingzuoyunshi[1].type}：(${xingzuoyunshi[1].content})
            </li>
            <li style="margin-bottom: 10px">
              ${xingzuoyunshi[2].type}：(${xingzuoyunshi[2].content})
            </li>
            <li style="margin-bottom: 10px">
              ${xingzuoyunshi[3].type}：(${xingzuoyunshi[3].content})
            </li>
            <li style="margin-bottom: 10px">
              ${xingzuoyunshi[4].type}：(${xingzuoyunshi[4].content})
            </li>
            <li style="margin-bottom: 10px">
              ${xingzuoyunshi[5].type}：(${xingzuoyunshi[5].content})
            </li>
            <li style="margin-bottom: 10px">
              ${xingzuoyunshi[6].type}：(${xingzuoyunshi[6].content})
            </li>
            <li style="margin-bottom: 10px">
              ${xingzuoyunshi[7].type}：(${xingzuoyunshi[7].content})
            </li>
            <li style="margin-bottom: 10px">
              ${xingzuoyunshi[8].type}：(${xingzuoyunshi[8].content})
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  `;
}

module.exports = fn;
