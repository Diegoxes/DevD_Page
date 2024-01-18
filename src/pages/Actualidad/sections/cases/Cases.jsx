const Cases = () => {

    return ( 
        <section>
            <div className="grid grid-cols-2">
            <h2>HACK PARA EMPRENDEDORES</h2>
            
             <div>
             <video className="max-w-full max-h-full" controls>
             <source src="https://www.youtube.com/watch?v=jbbfz4JC8j4" type="video/mp4" /></video>
             </div>
            </div>
            <div className="grid grid-cols-2">
            <div>
             <video className="max-w-full max-h-full" controls>
             <source src="/videos/tu_video.mp4" type="video/mp4" /></video>
             </div>
              <h2>TENDENCIAS PARA EL FUTURO</h2>
            </div>
            <div className="grid grid-cols-2">
               <h2>EL FUTURO ES REMOTO</h2>
               <div>
             <video className="max-w-full max-h-full" controls>
             <source src="/videos/tu_video.mp4" type="video/mp4" /></video>
             </div>
            </div>
            
        </section>
     );
}
 
export default Cases;