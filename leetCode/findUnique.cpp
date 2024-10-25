#include<bits/stdc++.h>
using namespace std;
int findUnique(int *arr, int size)
{
    int ans = 0;
    for(int i = 0; i < size; i++){
        ans = arr[i] ^ ans;
        
    }

    return ans;
}
int main()
{
    int arr[7] = {1,2,2,1,3,3,5};
    cout << findUnique(arr , 7) << endl;;

    return 0;
}