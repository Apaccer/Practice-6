export function createMarkupProduct({ title, thumbnail, price }) {
  return ` <li class="item">
        <img class="item-img" src="${thumbnail}" alt="picture" />
        <p class="item-title">${title}</p>
        <p class="item-price">${price}</p>
      </li>`;
}

export function createMarkupProductById({ title, thumbnail, price }) {
  return `
  <div class="item">
    <img class="item-img" src="${thumbnail}" alt="picture" />
        <p class="item-title">${title}</p>
        <p class="item-price">${price}</p>
      </div>`;
}
