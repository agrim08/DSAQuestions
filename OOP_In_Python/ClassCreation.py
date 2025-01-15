class Car():
    total_car = 0
    def __init__(self, brand , model):
        self.__brand = brand #any attribute with 2 leading underscores is not accessible outside class but can be accessible within class
        self.model = model   
        Car.total_car += 1  #static variable incremented every time new object is created

    def full_name(self):
        return f"{self.__brand} {self.model}"

    def get_brand(self):
        return self.__brand + " !"

    def fuel_type(self):
        return "petrol or diesel"
    
    @staticmethod
    def message():
        return "Cars are amazing"

class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand,model) #to inherit from parent class
        self.battery_size = battery_size
    
    def fuel_type(self):
        return "Electricity"

my_car = Car("Buggati" , "Chiron")
my_electric_car = ElectricCar("Tesla" , "CyberTruck" , "122.4")
# print(my_electric_car.battery_size)
# print(my_car.brand, "=>", my_car.model)
# print(my_car.full_name())

""" Encapsulation:- """
# print(my_car.__brand)
# print(my_car.get_brand())

""" Polymorphism """
# print(my_car.fuel_type())
# print(my_electric_car.fuel_type())

"""Class Variables"""
my_Car2 = Car("honda" , "City")
mycar3 = Car("Lambo" , "Urus")
# print(Car.total_car)

"""Static Methods """
# print(Car.message())
# print(my_car.message())

"""isinstance method"""
# print(isinstance(my_electric_car, Car))
# print(isinstance(my_electric_car, ElectricCar))

"""Multiple Inheritance"""
class Engine:
    def print_engine(self):
        return "V8"

class Cooler:
    def print_cooler(self):
        return "Liquid Conditioning"

class SuperCar(Car, Engine , Cooler):
    pass

my_super_car = SuperCar("Toyota" , "Supra")
print(my_super_car.print_cooler())
print(my_super_car.print_engine())