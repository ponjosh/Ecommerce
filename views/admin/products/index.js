const layout = require('../layout');

module.exports = ({ products }) => {
    const renderedProducts = products 
    .map(product => {
        return`
        <tr>
            <ts>${product.title}</td>
            <td>${product.price}</td>
            <td>
                <a href="">
                    <button class="button is-link">
                    Edit
                    </button>
                </a>
            </td>
            <td>
                <button class ="button is-danger">Delete</button>
            </td>
        </tr>
    `;
    })
    .join('');

return layout({
    content:`
        <div class-"control"
            <h1 class="subtitle">Products</h1>
            <a href="/admin/products/new" class="button is-primary">New Product</a>
        </div>
        <table class="table">
            <thread>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thread>
            <tbody>
                ${renderedProducts}
            </tbody>
        </table>
        `
    });
};