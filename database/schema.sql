DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store
DROP TABLE IF EXISTS groceryItems;
CREATE TABLE groceryItems (
id SERIAL PRIMARY KEY,
name VARCHAR(30) NOT NULL UNIQUE,
price NUMERIC(3,2), 
section TEXT,
date_of_purchase DATE 
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers (
id SERIAL PRIMARY KEY,
shopperName VARCHAR(30) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS shoppersOrders;
CREATE TABLE shoppersOrders(
ItemId INTEGER,
ShopperId INTEGER,
FOREIGN KEY (ItemId) REFERENCES groceryItems(id),
FOREIGN KEY (ShopperId) REFERENCES shoppers(id)
)