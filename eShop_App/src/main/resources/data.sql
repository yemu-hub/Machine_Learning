INSERT INTO catalogs (name, description, active) VALUES 
('Electronics', 'Electronic devices and accessories', true),
('Books', 'Books and e-books', true),
('Clothing', 'Fashion and apparel', true);

INSERT INTO products (name, description, price, cost, category, stock_quantity, image_url, active, catalog_id) VALUES
('Smartphone', 'Latest model smartphone with advanced features', 699.99, 500.00, 'Electronics', 100, 'https://via.placeholder.com/200', true, 1),
('Laptop', 'High-performance laptop for work and gaming', 1299.99, 1000.00, 'Electronics', 50, 'https://via.placeholder.com/200', true, 1),
('Classic Novel', 'Timeless literary masterpiece', 14.99, 5.00, 'Books', 200, 'https://via.placeholder.com/200', true, 2),
('T-Shirt', 'Comfortable cotton t-shirt', 19.99, 8.00, 'Clothing', 300, 'https://via.placeholder.com/200', true, 3); 