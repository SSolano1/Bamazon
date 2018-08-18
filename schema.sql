
CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT (10),
  stock_quantity INT (10),
  PRIMARY KEY (id)
);

insert into products (
  product_name, department_name, price, stock_quantity)
  Values("XBOX ONE X", "Electronics", 499.99, 200);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Madden NFL 19", "Video Games", 59.99, 500);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Aston Martin DB11", "Automobile", 190000.00, 2);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Windows Laptop", "Electronics", 1299.99, 130);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Apple MacBook Pro", "Electronics", 2699.99, 150);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Call of Duty: Black OPS4", "Video Games", 59.99, 500);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Rolex", "Jewelry", 30000.99, 12);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Louboutin Shoes", "Clothing", 1499.99, 25);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Ferrari 488", "Automobile", 350050.00, 7);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Louis Vuitton Purse", "Accessories", 2899.99, 20);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Canon EOS Camera", "Electronics", 399.99, 100);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Amazon Echo", "Electronics", 129.99, 600);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Houston Diamond Necklace", "Jewelry", 2099.99, 5);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Blu-ray Deadpool 2", "Movies", 22.96, 100);
  
  insert into products (
  product_name, department_name, price, stock_quantity)
  Values("Blu-ray Avengers: Infinity War", "Movies", 27.96, 100);