--create basic tables to store data for werewolf game

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.player(
    "player_id" smallint,
    "name" varchar,
    "cookie_id" varchar,
    "life_status" varchar,
    "game_id" bigint 
);

CREATE TABLE public.votes(
    "player_id" smallint,
    "game_id" bigint,
    "game_status" varchar NOT NULL,
    "voted_player_id" smallint ,
    "game_rounds" smallint NOT NULL,
    "identity" varchar NOT NULL
);

--ALTER TABLE public.player ADD CONSTRAINT "player_fk0" FOREIGN KEY ("votes_id") REFERENCES  public.votes("_id");

