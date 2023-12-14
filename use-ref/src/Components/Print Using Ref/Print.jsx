import React, { useRef } from 'react'

function Print() {

    let butRef = useRef()

    let printFun =()=>{
        butRef.current.style.display="none"
        window.print()
        butRef.current.style.display="inline"
    }

  return (
    <div style={{padding:"5rem"}}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem omnis at, iusto beatae neque, ut explicabo repudiandae odit placeat, quasi dignissimos inventore aperiam ipsa consequatur amet quisquam adipisci eius sint.
      Consequatur maxime fuga doloremque, ex nulla quam nesciunt laborum eius provident. Exercitationem aliquid illo doloribus, saepe necessitatibus veritatis quaerat, voluptatum obcaecati incidunt vel numquam quisquam eveniet pariatur dicta inventore est.
      Numquam iusto fugit, nesciunt sequi corporis eveniet nam adipisci ab aliquid excepturi recusandae asperiores. Numquam dolorum obcaecati omnis nostrum, quod ratione voluptas nemo sint aspernatur explicabo, alias minima laborum accusantium.
      Praesentium consequatur enim hic minima, aliquid ut facilis voluptas? Blanditiis vitae autem, atque eligendi distinctio quam. Voluptates sint asperiores ut minus? Et corporis illo consequatur molestiae porro cumque magnam veniam.
      Accusamus minus illum eum temporibus facilis, nesciunt ex labore reiciendis eos accusantium quaerat laborum laboriosam possimus delectus voluptas laudantium placeat provident reprehenderit aperiam eaque doloribus aliquam! Pariatur, dolore facere? Repudiandae.
      Molestias aperiam, pariatur sequi cumque laborum reiciendis hic inventore nulla nostrum fugit aliquid expedita facilis minus impedit dicta dignissimos quod non mollitia provident quam quae, quia, eum unde reprehenderit? Ipsa.
      Odio fugiat, deserunt temporibus harum quo et nostrum sed illo nisi maxime sunt facere enim error dolor omnis minima quibusdam eum officia repellat dolores consequatur dignissimos? Accusamus sint quos culpa!
      Deleniti beatae harum, tempora consectetur soluta repudiandae recusandae vel veritatis provident ab ad magnam explicabo incidunt inventore eaque, ullam neque voluptates nesciunt quaerat! Laudantium quidem aperiam suscipit voluptatibus recusandae sint.
      Consequatur numquam laboriolendus accusamus. Ex ullam qui maxime laborum unde a optio perspiciatis aliquid, repudiandae libero ipsa deleniti sunt fugiat doloremque earum odit quis facilis! Provident.
      Voluptates, ducimus? Ipsam, quo impedit? Corrupti nesciunt itaque tempore quas amet consequatur. Quae repellat, voluptatum expedita, labore repellendus corrupti amet explicabo voluptatibus aperiam repudiandae modi tenetur ab officia odio magni!
      eriam temporibus. In, vitae quia debitis quas labore rem ab blanditiis accusamus doloremque aliquam sequi quisquam facilis earum aut cum. Explicabo illo dolor maiores amet.
      Porro maiores voluptas molestias molestiae. Rerum, aspernatur fugiat! Minima rem molestias quos totam tenetur quae accusantium recusandae quasi aspernatur, a illum repudiandae at itaque in quam sunt ad temporibus non.</p>

      <button onClick={printFun} ref={butRef}>Print</button>
    </div>
  )
}

export default Print
