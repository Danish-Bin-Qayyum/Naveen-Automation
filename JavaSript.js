



function displaybrowserinfo(browsername,browserversion,browserexecution) {
                   if (typeof browserversion === 'number' && typeof browserexecution)// (why we  use typof keyword if if are use this operator "===")
                   { 
                      console.log(`browser: ${browsername}, 'version ${browserversion} , execution ${browserexecution}`);
                   }
                    else if (typeof browserversion === "number")
                   {
                    console.log(`browser: ${browsername},b 'version ${browserversion} `);
                   }
                   else
                   {
                      console.log(`browser: ${browsername}`);
                   }
}
 displaybrowserinfo("chrom", 22 )