# PLANET OF THE TAPES
###### Hi everyone, welcome to the Planet of the Tapes!!
------------
Authors:
------------
```
Rubén Calvo Martinez    r.calvoma@alumnos.urjc.es        Github User: Casanova2      
Raúl Iglesias González  rb.iglesias@alumnos.urjc.es      Github User: raulig22     
Carlos López García     c.lopezgarcia2@alumnos.urjc.es   Github User: CarlosLopGarcia   
Asier Ruano Peñas       a.ruano@alumnos.urjc.es          Github User: AsierRuano  
Sergio Sánchez Vallés   s.sanchezval@alumnos.urjc.es     Github User: SergioSV96
```
We are a small group from URJC university in Spain and we are doing this web app for Web Aplications Development.  
**We will be working on a videoclub. The costumers will be able to buy films, videogames and series.**  

# Phase 1  
In this phase we will show you the entities of the database, the external technologies that will be used and the advanced functionalities of our project.     
       
For a better work organization, we will use Trello. Here is the link: [Trello table](https://trello.com/b/mblOwpgb/planet-of-the-tapes)        
  
## External Technologies
* Facebook Page
* Google Maps Location  
* Mail suscription 

## Data Base Entities
> User  
> Products  
> Orders  
> Packs  
------------
## Advanced Functionality     
* Personalized recommendations    
------------

# Phase 2  
In this phase, we will show you the layouts for our web. We have made only the HTML and CSS implementation.

These are the screens that we have created:  
  
* Main screen[index]: This screen will be displayed when starting the web page. Here, you can choose between games, movies
and series section. Also, you can go to our facebook page by clicking the "Facebook" button, or log in for start renting.  
![Main Page Image](screenshots/mainPage.png)  
  
* Product List screen[products]: In this screen, we can see the product list depends on series, movies or videogames.  
![Product List Image](screenshots/productsPage.png)  
  
* Product screen[product]: In this screen, you can see a detailed description of the product you have chosen before.  
(series, movies or games). If you are logged, you can start the rent of the product.   
![Product Image](screenshots/productPage.png)

  
* Log In/Register screen[register]: In this screen, you will be able to log in in our page, or register if you are not a member of this awesome community.  
![Log In/Register Image](screenshots/loginPage.png)  

* Contact screen[contact]: Here, the users can know more about us and where we are.  
![Contact Image](screenshots/contactPage.png)  
  
* Cart screen[cart]: You will go to this screen only if you are a registered user. Here, you can see your orders and pay for them.  
![Cart and Checkout Image](screenshots/cartPage.png)  


Now, we will show you a simple navigation diagram from the main page, though you can go wherever you want from every page.  
![Navigation Diagram](screenshots/NavigationDiagram.png)  
  
# Phase 3

In this phase, we have implemented the app with functionality in Spring. If you want to run it, you have to import the project in your Spring Tool Suite, and run as Spring boot application.
Once the application is started, you have to write this in your browser to accede our app: "https://localhost:8443".

We have made some changes in our view, and we have created some other news. Here are the pictures of these changes:

* Register View:    
![Register Page](screenshots/newRegisterPage.png)  
  
* Login View:  
![Login Page](screenshots/newLoginPage.png)  
  
* Main View with user/admin logged:  
![Main Logged Page](screenshots/logedMainPage.png)  
  
* Admin Main View:  
![Admin Page](screenshots/adminPage.png)  
  
* User Main View:  
![User Page](screenshots/userPage.png)  
  
* Admin products view:  
![Products Page](screenshots/productlistPage.png)  
  
* Admin User list:  
![Users Page](screenshots/usersPage.png)  
  
* Admin Orders View:  
![Orders Page](screenshots/ordersPage.png)  
  
* Admin Packs View:  
![Packs Page](screenshots/packsPage.png)  
  
* Admin Add Pack View:  
![Add Pack Page](screenshots/addPackPage.png)  
  
* Admin Remove Pack View:  
![Remove Pack Page](screenshots/removePackPage.png)
  
* Admim Add Product View:  
![Add Product Page](screenshots/addproductPage.png)  
  
* Admin Remove Product View:  
![Remove Product Page](screenshots/removeproductPage.png)  
  
* Admin Modify Product View:  
![Modify Product Page](screenshots/modifyproductPage.png)  
  
* Admin Add User View:  
![Add User Page](screenshots/adduserPage.png)  
    
* Admin Remove User View:  
![Remove User Page](screenshots/removeuserPage.png)  
  
* Cart in Main View:  
![Cart in index Page](screenshots/cartMainPage.png)  
  
* Enter Payment Data View:  
![Enter Data Page](screenshots/enterpaymentPage.png)  
  
We have update our navigation diagram too. Here are 2 different diagrams. First one is th "main view", one in which you can purchase products by login and visit the web.  
The second one is the admin/user view. Once you are looged as admin or user, you canmanage your account or the products and users in the app.  
  
* ![Main Diagram View](screenshots/mainNavigationView.png)  
  
* ![Admin Diagram View](screenshots/adminNavigationView.png)    
  
  
Also, here is the diagram with database entities relations:

![Relation Diagram](screenshots/RelationDiagram.png)  
  
To finish, we have made class diagrams by parts to connect the classes of our application and the views that compose it:  
  
## Inheritance  
  
* ![Controllers](screenshots/controllerInheritance.png)  
  
* ![Repositories](screenshots/repositoryInheritance.png)  
  
* ![Configuration](screenshots/securityInheritance.png)  
  
## Autowired Relations between Controllers, Repositories and Entities  
  
* ![Controllers and Repositories](screenshots/controllerAndRepository.png)  
  
* ![DataExamples and Repositories](screenshots/dexamplesAndRepository.png)  
  
* ![Security Configuration](screenshots/secConfigAndRepository.png)  
  
## Relation between Entities  
  
* ![Entities](screenshots/entitiesRelation.png)  
  
## Relation between Controllers and HTML Views  
  
* ![Controllers and Views p1](screenshots/controllerhtmlp1.png)  
  
* ![Controllers and Views p2](screenshots/controllerhtmlp2.png)  
  
# Phase 4  
  
In this phase, we have implemented an API REST app, and we have built this with dockers.  
  
If you want to see the API REST documentation [click here](https://github.com/Casanova2/planet_of_the_tapes/tree/master/API.md).  
If you want to see the DOCKER documentation [click here](https://github.com/Casanova2/planet_of_the_tapes/tree/master/DOCKER.md).  

We have created diagrams with the new controllers and their dependencies, and with the related rest templates:
* ![Controllers Rest](screenshots/RestDiagram.png)  
* ![Templatess Rest](screenshots/TemplateDiagram.png)  

# Phase 5

In this phase, we have implemented a SPA with Angular. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.
You can use our Angular project with in two different ways: Development and Deployment.
The spring based web is also available on `https://localhost:8443/`.

Running *all* with **docker**, just follow **[this guide](https://github.com/Casanova2/planet_of_the_tapes/blob/master/DOCKER.md)** and then navigate to http://localhost:8080/angular/ to see the Angular SPA.

## Prerequisites

In order to launch this application in Development mode, you need to have installed [Node.js](https://www.npmjs.com/get-npm) , then do the following steps:

1. Download the repository.
2. Navigate to "frontend".
3. Using your shell, execute `npm install`.

## Development server

First you have to run the backend project in Spring, this will load de DB and all the necessary resources.
Then go to the "frontend" folder and run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment server

You have to run the backend project, using Spring boot or launching the application.jar.
Then navigate to `http://localhost:8443/angular/`, this will lead you to the Angular based web.  
  
## Images  

These are the class diagrams of the services and the components that they inherit from them, for our Angular application:  
  
* ![Users](screenshots/userservice.png)  
  
* ![Products](screenshots/productservice.png)  
  
* ![Packs](screenshots/packservice.png)  
  
* ![Orders](screenshots/orderservice.png)  
  
* ![Session](screenshots/sessionservice.png)  
