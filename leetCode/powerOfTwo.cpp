#include<bits/stdc++.h>
using namespace std;

//*! BRUTE FORCE
// int powerOfTwo(int n){
//     int ans = 1;
//     for(int i = 0; i <= 30; i++){
//         if(ans == n) {
//             return true;
//         }
//         if(ans < INT32_MAX/2)
//         ans = ans * 2;
//     }
//     return false;
// }

int powerOfTwo(int n){
    if(n <= 0){
        return false;
    }
    if((n & (n-1)) == 0){
        return true;
    }
    else{
        return false;
    }
}

int main(){
    cout << powerOfTwo(1) << endl;
    return 0;
}
