Atte Kivimäki

# Tasks

    1.	Create a folder for the project
    2.	Create json file for the data
    3.	Create data access layer for the data
    4.	Create a single-page application to use the data
    5.	Submit the project
    6.	Appendix: Example web operations

## 1. Create a folder for the project

Create a folder for the project. Name the folder with Kivimäki_Atte_computer_project.

## 2. Create json file for the data

Create a file called Kivimäki_Atte_computers.json

```json
[
{
"id":1,
"name":MaxEffect 2000,
"type":gameover,
"amount":30,
"price":499
},
{
"id":3,
"name":BigFlop Mark II,
"type":supercomputer,
"amount":20,
"price":100
},
{
"id":4,
"name":Beast II,
"type":server,
"amount":5,
"price":2000
},
{
"id":5,
"name":Cera 2400,
"type":tabletop,
"amount":150,
"price":1500
},
{
"id":7,
"name":GameDelux,
"type":embedded,
"amount":7,
"price":300
},
{
"id":2,
"name":Xunil 4.7,
"type":laptop,
"amount":10,
"price":200
},
{
"id":6,
"name":King 3000,
"type":pocket computer,
"amount":25,
"price":700
}
]
```

## 3. Create data access layer for the data

Create a datastorage layer with all necessary methods.

Necessary operations:

Your data access layer should have the following operations:

- get all
- get one
- insert
- remove

The data is read dynamically from the data file. When the data is changed it is saved back to the disk file.

## 4. Create a single-page application to use the data

Create a single-page web application. Use fetch to manipulate data.

Create the following operations:

- get all
- get one
- insert
- remove

Below (Appendix) are a few examples of web operations. Design and implement the main menu and all other necessary pages.
Design and implement stylesheets for your application.

## 5. Submit the project

Submit your project folder Kivimäki_Atte_computer_project acording to instructions given separately.
The project folder should also include the data in a json file named as Kivimäki_Atte_computers.json.

## 6. Appendix: Example web operations

### Menu

Menu

Get all

Get computer

Insert computer

Update computer

Delete computer

### Get all

Get all

| id  | name            | type            | amount | price |
| --- | --------------- | --------------- | ------ | ----- |
| 1   | MaxEffect 2000  | gameover        | 30     | 499   |
| 2   | Xunil 4.7       | laptop          | 10     | 200   |
| 3   | BigFlop Mark II | supercomputer   | 20     | 100   |
| 4   | Beast II        | server          | 5      | 2000  |
| 5   | Cera 2400       | tabletop        | 150    | 1500  |
| 6   | King 3000       | pocket computer | 25     | 700   |
| 7   | GameDelux       | embedded        | 7      | 300   |

### Get computer

Query result

- id: 1
- name: MaxEffect 2000
- type: gameover
- amount: 30
- price: 499

### Add computer

Add a computer

- id
- name
- type
- amount
- price

### Error message

- Error
- Error message here
