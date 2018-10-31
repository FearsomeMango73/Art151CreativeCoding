#include<stdio.h>
#include<time.h>
#define  DIM 1400
/* (i = 0; i < limit; i=i+3){
acc = acc + i;
acc = acc + i + 1;
acc = acc + i + 2;
}
for (i=limit; i<x;i++){
acc = acc + i;
}
*/
void labw10(int myMat[][DIM], int vecB[][1], int result[][1])
{
int i;
int k;

for ( i = 0 ; i < DIM ; i++ )
    {
        for ( k = 0 ; k < DIM ; k= k+7 )
        {          
            result[i][0] += myMat[i][k]*vecB[k][0];
            result[i][0] += myMat[i][k+1]*vecB[k][0];
            result[i][0] += myMat[i][k+2]*vecB[k][0];
            result[i][0] += myMat[i][k+3]*vecB[k][0];
            result[i][0] += myMat[i][k+4]*vecB[k][0];
            result[i][0] += myMat[i][k+5]*vecB[k][0];
            result[i][0] += myMat[i][k+6]*vecB[k][0];
            
            if(k+7 >= DIM){
              for( k; k < DIM ; k++ ){
                result[i][0] += myMat[i][k]*vecB[k][0];
              }
            }
        }
    }

}
int main() {
	
int mat[DIM][DIM];
int vec[DIM][1];
int result[DIM][1];
int i=0;
int j=0;	
 for (i=0;i<DIM;i++){ 
    for (j=0;j<DIM;j++)
	 {
	 	mat[i][j] = i*i + j*j ;
	 	vec[i][0] = (i+2) * (j+3);
	 	result[i][0]=0;
	 }
 }
    labw10(mat,vec,result);
 
 for (i=0;i<DIM;i++) 
 printf("%d\n",result[i][0]);
    
}
