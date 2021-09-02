CREATE DATABASE idealist;

CREATE TABLE suggestions(
    suggestion_id SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL,
    content TEXT NOT NULL,
    ts TIMESTAMP NOT NULL
);