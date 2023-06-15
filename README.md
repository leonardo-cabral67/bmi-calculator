# bmi-calculator
A simple project of a **BMI (body mass index) calculator**, however i use the best software development practices.

this project will have: 
  * lint
  * commit standard messages (conventional commits) - [conventional commits - docs](https://www.conventionalcommits.org/pt-br/v1.0.0/)
  * architecuture in layers:
      * view
      * controller
      * use-case
  * tests
  * continuous integration (github actions)
  * continuous deployment
  * node and javascript
  
  ---
  
## Input, processing and output
 Almost everything in software development is based on a input, processing and output. In this application it is not different and get it will be needed to understand application architecture. 
 
 * Input: the user interface consists of a calculator with buttons that allow user can enter their weight and his height. These values will be the input. 
 
 * Processing: the application takes the user's input and calculates BMI using a formula.
 
 * Output: After application process user's inputs (height an weight), it will return user's body mass index, then this is the output and it will be displayed on user interface.

## Architecture: View, Controller, Usecase
* View:
   * user interface where will be possible access inputs of application
* Controller:
    * flux controll of application data between view and usecase layer.
* Usecase:
    * processing of data received by controller and application business rules. 
