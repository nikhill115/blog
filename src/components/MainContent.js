import React from 'react';

function MainContent() {
  return (
    <div className='main-container'>
        <div className='content'>
         <h2 style={{marginLeft:"5px"}}>useContext()</h2>
         <p lang='eng'>React Context
React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

The Problem
State should be held by the highest parent component in the stack that requires access to the state.

To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".
</p><br />
<div className='rectangle' id="rectangle">
<p>
Functional Components:<br/> Functional components are simply javascript functions. We can create a functional component in React by writing a javascript function. These functions may or may not receive data as parameters, we will discuss this later in the tutorial. Below example shows a valid functional component in React: 

<br/><br/>Example:
<br/></p><p className='example'>const Democomponent=(&nbsp;)=&gt;
&#123;<br/>
    return &lt;h1&gt;Welcome Message!&lt;/h1&gt;;<br/>
&#125;</p><br/><p className='example'>
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1() &#123;
  const [user, setUser] = useState("Jesse Hall");

  return (
    &lt;&gt;
    &lt;h1&gt;&#123;`Hello $&#123;user &#125;!`&#125;&lt;/h1&gt;
    &lt;Component2 user=&#123;user&#125; /&gt;
    &lt;/&gt;
  );
&#125;

function Component2(&#123; user &#125;) &#123;
  return (
    &lt;&gt;
    &lt;h1&gt;Component 2  &lt;/h1&gt;
    &lt;Component3 user=user /&gt;
    &lt;/&gt;
  );
&#125;

function Component3(user ) &#123;
  return (
    &lt;&gt;
    &lt;h1&gt;Component 3   &lt;/h1&gt;
      &lt;Component4 user={user} /&gt;
      &lt;/&gt;
  );
&#125;




</p>


</div>

        </div>
        <div className='blog-card'>
          <div className='content-blog'>
             <div>Types of Components </div>
             <div className='options'>
             <div><a href='#rectangle'>1.Class Components</a></div>
             <div><a href='#circle'>2.Functional Components</a></div>
            
             </div>
             
            
          </div>
          <div className='scrolltop'><a href="#"><button>Scroll to Top</button></a></div>
        </div>

    </div>
  )
}

export default MainContent;