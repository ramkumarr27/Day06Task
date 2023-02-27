 class Movie{
        constructor(title,studio,rating = "PG"){
            this.title = title;
            this.studio = studio;
            this.rating = rating;
            this. movieDetails=[];
        }
        getPG(){
             
             for (let i = 0; i < this.title.length; i++) {
                this.movieDetails.push(this.title[i]+"-"+this.rating)
             }
            //console.log(this.title[0],this.rating);
        return(this.movieDetails);
        }
    
        print(){
            return "The Title: "+this.title+", The studio: "+this.studio+", The Rating: "+this.rating
           }
    }
    
    input1 = new Movie(["Mass","3","Thalaiva"]);
    input2 = new Movie("Casino Royale","Eon Productions","PG­13")
    
    console.log(input1.getPG());
    console.log(input2.print());
    
    
    //Write a “person” class to hold all the details.
    
    class Person{
        constructor(name,id,age,bg){
            this.name = name;
            this.id = id;
            this.age = age;
            this.bg = bg;      
    }
    print(){
        return "This is "+this.name+", his id is "+this.id+" and his age and bloodgroup is "+this.age +"and"+this.bg
       }
    }
    
    
    const person1 = new Person("Ram",01,22,"A1+");
    const person2 = new Person("Annu",02,20,"O+");
    
    
    console.log(person1.print());
    console.log(person2.print());



    class uberPrice{
        constructor(distance){
            this.distance = distance;
            this.calc;
        }
        calculate(){
            this.calc = this.distance * 12;
            return 'The Price will be '+this.calc+' rupees for '+this.distance+' kms.'
        }
    }
    
    const price = new uberPrice(10);
    console.log(price.calculate());