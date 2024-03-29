import './styles/normalize.css';
import './styles/index.css';
import { renderAllProducts } from './js/renderMarkup';
import { refs } from './js/refs';
import { getProductById } from './requests/products';
import { createMarkupProductById } from './services/markupService';
// renderAllProducts();

refs.singleProductForm.addEventListener('submit', onFormIdSubmit);

async function onFormIdSubmit(e) {
  e.preventDefault();
  const id = e.target.elements.id.value.trim();
  try {
    const product = await getProductById(id);
    const markup = createMarkupProductById(product);
    refs.singleProduct.innerHTML = markup;
  } catch (error) {
    console.log(error.message);
  }
  e.target.reset;
}
