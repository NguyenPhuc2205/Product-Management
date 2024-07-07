module.exports.index = (req, res) => { // tuyến '/products' (ko cần vì bên index.route.js đã có path chỉ về products)
  res.render('client/pages/products/index.pug', {
    title: "Trang danh sách sản phẩm"
  });
}