CREATE DATABASE inventarios;

USE inventarios;

CREATE TABLE productos_de_limpieza (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    cantidad INT,
    precio DECIMAL(10, 2)
);

INSERT INTO productos_de_limpieza (nombre, descripcion, cantidad, precio) VALUES
('Detergente Líquido', 'Detergente para lavar platos', 50, 2.99),
('Limpiador Multiusos', 'Limpiador para diversas superficies', 100, 3.49),
('Cloro', 'Desinfectante para superficies y pisos', 75, 1.89),
('Esponja Abrasiva', 'Esponja para limpieza de superficies duras', 200, 0.99),
('Amoniaco', 'Limpiador desinfectante de alta potencia', 30, 1.49),
('Lavavajillas', 'Detergente líquido para lavar platos a mano', 60, 4.99),
('Limón Concentrado', 'Limpiador con aroma a limón para pisos', 80, 2.49),
('Toallas de Papel', 'Paquetes de toallas de papel para limpieza', 150, 1.59),
('Desinfectante en Aerosol', 'Spray desinfectante para el hogar', 40, 3.29),
('Limpiador de Vidrios', 'Limpiador para cristales y ventanas', 90, 2.79),
('Papel Higiénico', 'Papel higiénico de alta calidad', 300, 0.89),
('Jabón Líquido', 'Jabón para manos', 120, 1.99),
('Desengrasante', 'Producto para eliminar grasa en cocina', 50, 4.19),
('Limpiador de Pisos', 'Limpiador para pisos de madera y cerámica', 110, 3.99),
('Guantes de Limpieza', 'Guantes para proteger manos durante la limpieza', 150, 2.39);

