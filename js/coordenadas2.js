// JavaScript Document
$(document).ready(function(){
	$('#solCoordenadas').bind('click touchstart', function(e) {	
		calculaCoordenadas();		
	});
});
function calculaCoordenadas() {
	
	var z = new Array(13);
	var iz, solz;
	    
		for (iz=1;iz<13; iz++)
        { 	
			z[iz]=$("#z"+iz).val();		
			
        } 	
	
	// Ascensión recta
    AH=z[1];
    AM=z[2];
    AS=z[3];
	// Declinación
    DG=z[4];
    DM=z[5];
    DS=z[6];
	// Latitud
	BG=z[7];
    BM=z[8];
    BS=z[9];
	// Longitud
	LG=z[10];		
    LM=z[11];	
    LS=z[12];
	
	TH=0;
    TM=0;
    TS=0;
    
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;
	
	DD=dd;
    MN=mm;
    YR=yyyy;
	
    
    with (Math) { 
	<!--Datos entrada-->
	RA=AH+AM/60+AS/3600
	<!--Declinación-->
        DC=DG+DM/60+DS/3600
	<!--latitud-->
	LT=BG+BM/60+BS/3600
	<!--longitud-->
	LG=LG+LM/60+LS/3600
	
	<!--fecha juliana-->
	HR = TH + TM / 60+TS/3600;
	DD=DD+HR/24
	DY = floor(DD)
	if (MN<3) {
		YR = YR - 1;
		MN = MN + 12;
		}
	if (YR + MN / 100 + DY / 10000 >= 1582.1015)  {
		GR =2-floor(YR/100)+floor(floor(YR/100)/4)
		} else {
			GR = 0
			}
	JD=floor(365.25* YR)+floor(30.6001*(MN+1))+DY+1720994.5+GR  
	T=(JD- 2415020)/36525
	SS= 6.6460656 + 2400.051*T +0.00002581*T*T
	<!--tiempo sidereo a 0h Greenwich-->
	ST =(SS/24-floor(SS/24))*24
	<!--Tiempo sidereo local-->
	
	SA=ST+(DD-floor(DD))*24*1.002737908
	
	SA=SA+parseFloat(LG)/15
	
	
	if (SA<0) {
		SA=SA+24
		}
	if (SA>24) {
		SA=SA-24
		}
		
        <!--conversion a hms del Tiempo sidereo local-->
	TSH=floor(SA);
	TSM=floor((SA - floor(SA)) * 60)
	TSS=((SA -floor(SA)) * 60 - TSM) * 60
	<!--Angulo horario-->
        H=parseFloat(SA)-parseFloat(RA)		
		
	if (H < 0) {
		H = H + 24
		}
	H = H * 15
	
	R =180/PI
	
	
	AL=parseFloat(asin(parseFloat(sin(parseFloat(DC)/parseFloat(R))*sin(parseFloat(LT)/parseFloat(R))+cos(parseFloat(DC)/parseFloat(R))*cos(parseFloat(LT)/parseFloat(R))*cos(parseFloat(H)/parseFloat(R)))))
	AZ=acos((-sin(parseFloat(DC)/parseFloat(R))*cos(parseFloat(LT)/parseFloat(R))+sin(parseFloat(LT)/parseFloat(R))*cos(parseFloat(DC)/parseFloat(R))*cos(parseFloat(H)/parseFloat(R)))/cos(parseFloat(AL)))
	
	AZ = parseFloat(AZ) * parseFloat(R)
	if (sin(parseFloat(H) / parseFloat(R)) < 0) {
		AZ = 360 - AZ
		}		
	<!--conversion a gms del acimut-->
	AZG=floor(AZ);
	AZM=floor((AZ - floor(AZ)) * 60)
	AZS=((AZ -floor(AZ)) * 60 - AZM) * 60
	AL=AL*R;
	<!--conversion a g.ms de la altura-->
	D = abs(AL);
	if (AL>0) {
		ALG=floor(D)
		} else {
		ALG=(-1)*floor(D)
		}
	ALM=floor((D - floor(D)) * 60)
	ALS = ((D - floor(D)) * 60 - ALM) * 60
	if (AL<0) {
		ALM=-ALM;
		ALS=-ALS;
		}
    }
	AZS = AZS.toFixed(3);
	ALS = ALS.toFixed(3);
	 var txtz="La estrella se encuentra a acimut: "+AZG+"h "+AZM+"m "+AZS+"s y altura: "+ALG+"º"+ALM+"'"+ALS+"''";
    $("#resultatCoordenades").html(txtz);
   /* form.tsl.value =SA;
    form.tsh.value =TSH;
    form.tsm.value =TSM;
    form.tss.value =TSS;
    form.acimut.value=AZ;
    form.azg.value =AZG;
    form.azm.value =AZM;
    form.azs.value =AZS;
    form.altura.value=AL;
    form.alg.value =ALG;
    form.alm.value =ALM;
    form.als.value =ALS;*/
    
     
}