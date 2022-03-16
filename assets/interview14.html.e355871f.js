import{o as n,c as s,a}from"./app.b05da4ec.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const p={},e={class:"language-jsx ext-jsx line-numbers-mode"},l=a(`<pre class="language-jsx"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">react demo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react@17/umd/react.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react-dom@17/umd/react-dom.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">


</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">


</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/babel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

    /*
    * context \u4F7F\u7528\u65B9\u6CD5
     1. \u521B\u5EFAstore\uFF1A\u901A\u8FC7 React.createContext \u521B\u5EFA AppContext \u5B9E\u4F8B
     2. \u5305\u88F9\u6574\u4E2A\u7EC4\u4EF6\uFF1A\u4F7F\u7528AppContext.Provider\u7EC4\u4EF6
     3. \u6CE8\u5165\u5168\u5C40\u53D8\u91CF\uFF0C\u5728AppContext.provider\u7EC4\u4EF6\u4E0A
     4. \u5F15\u5165\u5168\u5C40\u53D8\u91CF\uFF1A \u901A\u8FC7 AppContext.Consumer\u7EC4\u4EF6 \uFF0C\u5B50\u7EC4\u4EF6\u7684\u56DE\u8C03\uFF0C\u83B7\u53D6store\u4E2D\u7684\u5185\u5BB9\u548C\u65B9\u6CD5
    * */

    const { createContext } = React;

    //\u521B\u5EFAstore
    const AppContext=createContext({});

    class A  extends React.Component{
        constructor(props,context){
            super(props);
            this.state={
                a:context
            }
        }

        shouldComponentUpdate(nextProps, nextState,nextContext) {
            console.log(nextContext);
            return true;
        }


        componentDidMount() {
            console.log(this.state.a.name);
        }

        //\u4ECEstore\u4E2D\u53D6\u503C
        render(){
            return (
                &lt;AppContext.Consumer&gt;
                    {
                        (context)=&gt;{
                            return  &lt;div&gt;
                                &lt;div&gt;A\u7EC4\u4EF6Name:{context.name}&lt;/div&gt;
                                &lt;button onClick={context.changeName}&gt;\u6539\u53D8name&lt;/button&gt;
                            &lt;/div&gt;
                        }
                    }
                &lt;/AppContext.Consumer&gt;
            )
        }
    }


    class App extends React.Component{
        //\u5728\u9876\u5C42\u5305\u88F9\u6240\u6709\u5143\u7D20\uFF0C\u6CE8\u5165\u5230\u6BCF\u4E2A\u5B50\u7EC4\u4EF6\u4E2D

        constructor(props){
            super(props);
            this.state={
                name:&#39;xz&#39;
            }
        }

        shouldComponentUpdate(nextProps, nextState,nextContext) {
            console.log(nextContext,11);
            return true;
        }

        render(){
            return (
                &lt;AppContext.Provider value={{name:this.state.name,changeName:()=&gt;{
                        this.setState({
                            name:Math.random()
                        })
                    }}}&gt;
                    &lt;A/&gt;
                &lt;/AppContext.Provider&gt;
            )
        }
    }

    ReactDOM.render(
        &lt;App /&gt;,
        document.getElementById(&#39;app&#39;)
    );
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">


</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br></div>`,2),c=[l];function r(o,u){return n(),s("div",e,c)}var m=t(p,[["render",r]]);export{m as default};
