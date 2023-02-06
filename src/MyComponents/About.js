import React from 'react'

export const About = () => {
    let myStyle = {
      minHeight: "81vh",
      margin: "40px auto",
    };
    return (
        <div className="container my-2" style={myStyle}>
            This is a About component!
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nemo sapiente nostrum. Saepe omnis molestias harum est nisi officia vero laboriosam recusandae dignissimos? Totam ut nostrum neque et accusantium quisquam quod iusto aspernatur sequi!</p>
        </div>
    )
}
