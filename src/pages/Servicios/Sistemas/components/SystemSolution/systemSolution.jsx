// import imgsol from '@assets/image_1651_solution_empresa.png'
import imgsol from '../../../../../assets/image_1651_solution_empresa.png'
import style from '../SystemSolution/systemSolution.module.css'

const SystemSolution = () => {
    return(
        <section className={style.section_solution}>
            <div className={style.container_solution}>
                <h2 className={`${style.title_sol_sect} font-primary`}>Soluciones empresariales a la medida</h2>
                <div className={style.container_sol_sys}>
                    <p className={`${style.parr_sol} font-primary`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis adipisci cumque rem atque animi impedit, sed corporis nihil rerum expedita non sapiente, alias quaerat pariatur cupiditate blanditiis at veritatis enim!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut neque aliquid deserunt, velit atque dolores quia voluptate nostrum at enim aperiam quidem laudantium omnis? Debitis error dicta consequuntur quibusdam eius?
                    </p>
                    <img src={imgsol} alt="" className={style.img_sol}/>
                </div>
            </div>
        </section>
    )
}

export default SystemSolution