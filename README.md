# Node Exam
## Inicializar proyecto
Utiliza Docker para cargar todo el proyecto empezar a funcionar

- Ejecutar: docker-compose up -d
- Web: **http://localhost:3000/**
- MongoAdmin: **http://localhost:4000/**

## Alquiler de vehiculos

- Queremos crear un sistema de alquiler de coches
- Existe un listado de "cars" con las propiedades:

1. id-string
2. brand-string
3. model-string
4. price-float

Existe un listado de "clients" con las propiedades:
1. id-string
2. name-string
3. surname-string

Existe un listado de "rents" con las propiedades:
1. _id-ObjectID
2. client-string
3. car-string
5. price-float

- Se pueden hacer consultas de creación, edición y eliminación de los tres tipos de objetos
- Existe una API con la que se pueden realizar todas las operaciones, además está configurada para seguir el modo HATEOS en "rents"
- Se utiliza una base de datos mongo con 3 collections (cars,clients,rents)
- Las colecciones ya están creadas en la DB con datos con algunos ejemplos
- La URL para acceder al formulario de creación de alquiler es **http://localhost:3000/rent/new**
- La URL para listar todos los alquileres es **http://localhost:3000/rent/list**
- Al añadirse un nuevo alquiler se redirige la pagina a la lista de alquileres

## Chat

- Existe un chat en el que existen una ventana de mensajes y dos campos.
- Campo de texto para enviar el chat
- Campo de texto para poner nombre del usuario
- Al enviar un mensaje, se envía al servidor mediante socket tanto el mensaje como el nombre de la persona que lo envía. El resto de clientes reciben el mensaje y lo imprimen en la ventana de mensajes. 
- Además existen varias salas:
1. Todos. Si se escribe un mensaje a través del canal “todos”, se recepciona por todos los clientes independientemente del canal en el que se encuentre.
2. Canal #. Si se escribe un mensaje a través de un canal se recepciona por los usuarios de ese canal. 

La URL para acceder a cada sala del chat son:
- http://localhost:3000/chat/all
- http://localhost:3000/chat/1
- http://localhost:3000/chat/2
- http://localhost:3000/chat/3

## Mongo

- La base de datos se inicializa con algunos valores
- Teneis disponible una aplicación para visualizar la BD en **http://localhost:4000/**