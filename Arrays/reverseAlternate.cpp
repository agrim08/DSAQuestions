#include<bits/stdc++.h>
using namespace std;

void reverseAlternate(int arr[] , int size){
    for(int i = 0; i < size; i+=2){
        if(i + 1 < size){
            swap(arr[i], arr[i+1]);
        }
    }
}

void printArr(int arr[],int size){
    for(int i = 0; i < size; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{
    int even[6] = {1,2,3,4,5,6};
    int odd[5] = {1,2,3,4,5};

    reverseAlternate(even,6);
    printArr(even,6);

    reverseAlternate(odd,5);
    printArr(odd,5);


    return 0;
}