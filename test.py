# Write a Python program to Multiply all numbers in the list and return this product

def multiply(numbers):
    total = 1
    for x in numbers:
        total *= x
    return total

# Write a Python program to find smallest number in a list

def smallest(numbers):
    smallest = numbers[0]
    for x in numbers:
        if x < smallest:
            smallest = x
    return smallest

# Write a function to remove duplicate elements from a list of integers.

def remove_duplicates(numbers):
    output = []
    for x in numbers:
        if x not in output:
            output.append(x)
    return output

# b.	Write a function to calculate the factorial of a given integer.

def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

# c.	Write a function to calculate the distance between two points in a 2D coordinate system.

def distance(x1, y1, x2, y2):
    return ((x2 - x1)**2 + (y2 - y1)**2)**0.5

# Write a function to calculate the distance between two points in a 2D coordinate system where the points are class of coordinate type.

class Coordinate(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def distance(self, other):
        x_diff_sq = (self.x - other.x) ** 2
        y_diff_sq = (self.y - other.y) ** 2
        return (x_diff_sq + y_diff_sq) ** 0.5

# Write a function to calculate the distance between two points in a 2D coordinate system where the points are class of coordinate type.

