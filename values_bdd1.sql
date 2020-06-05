INSERT INTO type (name) 
VALUES ('rouge'),
('blanc'),
('rosé'),
('champagne');

INSERT INTO category (name) 
VALUES ('canaille'),
('retro'),
('charnu'),
('tendre');

INSERT INTO region (name) 
VALUES ('alsace'),
('beaujolais'),
('bordeaux'),
('bourgogne');

INSERT INTO wine (name, id_region, id_type, wine_year, buy_date, best, date_limit, origin, id_category, isTested, comments, quantity)
VALUES ('Louis Sipp Grossberg Pinot Noir', 1, 1, 2013, 2018, NULL, 2026, 'alsace', NULL, 1, 'trop bon', 1),
('Aujoux - Belle Grâce - AOP CÔTE DE BROUILLY', 1, 2, 2017, 2019, 2019, 2024, 'le petit ballon', 1, 0, NULL, 1 ),
('Château Pontet-Fumet - AOP SAINT-EMILION GRAND CRU', 1, 3, 2007, 2018, 2018, 2020, 'le petit ballon', 2, 1, "très bon, leger mais beau tannins, peu d'acidité", 1 );

INSERT INTO meal (name)
VALUES ('burger de boeuf'),
('saucisse purée'),
('rôti de boeuf aux échalottes'),
('maroilles');

INSERT INTO wine_meal (id_wine, id_meal)
VALUE(2, 1),
(2, 2),
(3, 3),
(3, 4);