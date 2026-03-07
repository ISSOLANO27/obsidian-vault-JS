> NOTE: **None** of these methods can be applied to HTML Collections. They may act like array, they are not

| ARRAY METHOD                       | DESCRIPTION                                                                                                                             |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| every(_callback_, _thisArg_)       | Tests whether the value of the _callback_ function is true for all array elements                                                       |
| filter(_callback_, _thisArg_)      | Creates a new array populated with the elements of the array that return a value of true from the _callback_ function                   |
| forEach(_callback_, _thisArg_)     | Applies the _callback_ function to each array element                                                                                   |
| map(_callback_, _thisArg_)         | Creates a new array by passing the original array elements to the _callback_ function, which returns the mapped value of those elements |
| reduce(_callback_, _thisArg_)      | Reduces the array by keeping only those elements returning a true value from the _callback_ function                                    |
| reduceRight(_callback_, _thisArg_) | Reduces the array starting from the last element by keeping only those elements returning a true value from the _callback_ function     |
| some(_callback_, _thisArg_)        | Tests whether the value of _callback_ function is true for at least one array element                                                   |
| find(_callback_, _thisArg_)        | Returns the value of the first array element returning a true value from the _callback_ function                                        |
| findIndex(_callback_, _thisArg_)   | Returns the index of the first array element returning a true value from the _callback_ function                                        |