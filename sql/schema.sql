CREATE DATABASE dashboard_app;
\c dashboard_app

CREATE TABLE cards (id SERIAL PRIMARY KEY, title VARCHAR(255), message VARCHAR(255));
\q