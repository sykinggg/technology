import{r as l,o as p,c as t,b as n,d as a,F as i,e,a as r}from"./app.ba47fc91.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const d={},o=n("h2",{id:"vnode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vnode","aria-hidden":"true"},"#"),e(" VNode")],-1),c=n("p",null,"\u5728\u5200\u8015\u706B\u79CD\u7684\u5E74\u4EE3\uFF0C\u9700\u8981\u5728\u5404\u4E2A\u4E8B\u4EF6\u65B9\u6CD5\u4E2D\u76F4\u63A5\u64CD\u4F5CDOM\u6765\u8FBE\u5230\u4FEE\u6539\u89C6\u56FE\u7684\u76EE\u7684\u3002\u4F46\u662F\u5F53\u5E94\u7528\u4E00\u5927\u5C31\u4F1A\u53D8\u5F97\u96BE\u4EE5\u7EF4\u62A4\u3002",-1),m=n("p",null,"\u90A3\u662F\u4E0D\u662F\u53EF\u4EE5\u628A\u771F\u5B9EDOM\u6811\u62BD\u8C61\u6210\u4E00\u68F5\u4EE5JavaScript\u5BF9\u8C61\u6784\u6210\u7684\u62BD\u8C61\u6811\uFF0C\u5728\u4FEE\u6539\u62BD\u8C61\u6811\u6570\u636E\u540E\u5C06\u62BD\u8C61\u6811\u8F6C\u5316\u6210\u771F\u5B9EDOM\u91CD\u7ED8\u5230\u9875\u9762\u4E0A\u5462\uFF1F\u4E8E\u662F\u865A\u62DFDOM\u51FA\u73B0\u4E86\uFF0C\u5B83\u662F\u771F\u5B9EDOM\u7684\u4E00\u5C42\u62BD\u8C61\uFF0C\u7528\u5C5E\u6027\u63CF\u8FF0\u771F\u5B9EDOM\u7684\u5404\u4E2A\u7279\u6027\u3002\u5F53\u5B83\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u53BB\u4FEE\u6539\u89C6\u56FE\u3002",-1),u=n("p",null,"\u53EF\u4EE5\u60F3\u8C61\uFF0C\u6700\u7B80\u5355\u7C97\u66B4\u7684\u65B9\u6CD5\u5C31\u662F\u5C06\u6574\u4E2ADOM\u7ED3\u6784\u7528innerHTML\u4FEE\u6539\u5230\u9875\u9762\u4E0A\uFF0C\u4F46\u662F\u8FD9\u6837\u8FDB\u884C\u91CD\u7ED8\u6574\u4E2A\u89C6\u56FE\u5C42\u662F\u76F8\u5F53\u6D88\u8017\u6027\u80FD\u7684\uFF0C\u662F\u4E0D\u662F\u53EF\u4EE5\u6BCF\u6B21\u53EA\u66F4\u65B0\u5B83\u7684\u4FEE\u6539\u5462\uFF1F\u6240\u4EE5Vue.js\u5C06DOM\u62BD\u8C61\u6210\u4E00\u4E2A\u4EE5JavaScript\u5BF9\u8C61\u4E3A\u8282\u70B9\u7684\u865A\u62DFDOM\u6811\uFF0C\u4EE5VNode\u8282\u70B9\u6A21\u62DF\u771F\u5B9EDOM\uFF0C\u53EF\u4EE5\u5BF9\u8FD9\u9897\u62BD\u8C61\u6811\u8FDB\u884C\u521B\u5EFA\u8282\u70B9\u3001\u5220\u9664\u8282\u70B9\u4EE5\u53CA\u4FEE\u6539\u8282\u70B9\u7B49\u64CD\u4F5C\uFF0C\u5728\u8FD9\u8FC7\u7A0B\u4E2D\u90FD\u4E0D\u9700\u8981\u64CD\u4F5C\u771F\u5B9EDOM\uFF0C\u53EA\u9700\u8981\u64CD\u4F5CJavaScript\u5BF9\u8C61\u540E\u53EA\u5BF9\u5DEE\u5F02\u4FEE\u6539\uFF0C\u76F8\u5BF9\u4E8E\u6574\u5757\u7684innerHTML\u7684\u7C97\u66B4\u5F0F\u4FEE\u6539\uFF0C\u5927\u5927\u63D0\u5347\u4E86\u6027\u80FD\u3002\u4FEE\u6539\u4EE5\u540E\u7ECF\u8FC7diff\u7B97\u6CD5\u5F97\u51FA\u4E00\u4E9B\u9700\u8981\u4FEE\u6539\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u518D\u5C06\u8FD9\u4E9B\u5C0F\u5355\u4F4D\u7684\u89C6\u56FE\u8FDB\u884C\u66F4\u65B0\u3002\u8FD9\u6837\u505A\u51CF\u5C11\u4E86\u5F88\u591A\u4E0D\u9700\u8981\u7684DOM\u64CD\u4F5C\uFF0C\u5927\u5927\u63D0\u9AD8\u4E86\u6027\u80FD\u3002",-1),h=n("p",null,"Vue\u5C31\u4F7F\u7528\u4E86\u8FD9\u6837\u7684\u62BD\u8C61\u8282\u70B9VNode\uFF0C\u5B83\u662F\u5BF9\u771F\u5B9EDOM\u7684\u4E00\u5C42\u62BD\u8C61\uFF0C\u800C\u4E0D\u4F9D\u8D56\u67D0\u4E2A\u5E73\u53F0\uFF0C\u5B83\u53EF\u4EE5\u662F\u6D4F\u89C8\u5668\u5E73\u53F0\uFF0C\u4E5F\u53EF\u4EE5\u662Fweex\uFF0C\u751A\u81F3\u662Fnode\u5E73\u53F0\u4E5F\u53EF\u4EE5\u5BF9\u8FD9\u6837\u4E00\u68F5\u62BD\u8C61DOM\u6811\u8FDB\u884C\u521B\u5EFA\u5220\u9664\u4FEE\u6539\u7B49\u64CD\u4F5C\uFF0C\u8FD9\u4E5F\u4E3A\u524D\u540E\u7AEF\u540C\u6784\u63D0\u4F9B\u4E86\u53EF\u80FD\u3002",-1),V=e("\u5177\u4F53VNode\u7684\u7EC6\u8282\u53EF\u4EE5\u770B"),v={href:"https://github.com/answershuto/learnVue/blob/master/docs/VNode%E8%8A%82%E7%82%B9.MarkDown",target:"_blank",rel:"noopener noreferrer"},f=e("VNode\u8282\u70B9"),y=e("\u3002"),g=r(`<h2 id="\u4FEE\u6539\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u89C6\u56FE" aria-hidden="true">#</a> \u4FEE\u6539\u89C6\u56FE</h2><p>\u4F17\u6240\u5468\u77E5\uFF0CVue\u901A\u8FC7\u6570\u636E\u7ED1\u5B9A\u6765\u4FEE\u6539\u89C6\u56FE\uFF0C\u5F53\u67D0\u4E2A\u6570\u636E\u88AB\u4FEE\u6539\u7684\u65F6\u5019\uFF0Cset\u65B9\u6CD5\u4F1A\u8BA9\u95ED\u5305\u4E2D\u7684Dep\u8C03\u7528notify\u901A\u77E5\u6240\u6709\u8BA2\u9605\u8005Watcher\uFF0CWatcher\u901A\u8FC7get\u65B9\u6CD5\u6267\u884Cvm._update(vm._render(), hydrating)\u3002</p><p>\u8FD9\u91CC\u770B\u4E00\u4E0B_update\u65B9\u6CD5</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
    const vm: Component = this
    /*\u5982\u679C\u5DF2\u7ECF\u8BE5\u7EC4\u4EF6\u5DF2\u7ECF\u6302\u8F7D\u8FC7\u4E86\u5219\u4EE3\u8868\u8FDB\u5165\u8FD9\u4E2A\u6B65\u9AA4\u662F\u4E2A\u66F4\u65B0\u7684\u8FC7\u7A0B\uFF0C\u89E6\u53D1beforeUpdate\u94A9\u5B50*/
    if (vm._isMounted) {
      callHook(vm, &#39;beforeUpdate&#39;)
    }
    const prevEl = vm.$el
    const prevVnode = vm._vnode
    const prevActiveInstance = activeInstance
    activeInstance = vm
    vm._vnode = vnode
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    /*\u57FA\u4E8E\u540E\u7AEF\u6E32\u67D3Vue.prototype.__patch__\u88AB\u7528\u6765\u4F5C\u4E3A\u4E00\u4E2A\u5165\u53E3*/
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      )
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode)
    }
    activeInstance = prevActiveInstance
    // update __vue__ reference
    /*\u66F4\u65B0\u65B0\u7684\u5B9E\u4F8B\u5BF9\u8C61\u7684__vue__*/
    if (prevEl) {
      prevEl.__vue__ = null
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode &amp;&amp; vm.$parent &amp;&amp; vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent&#39;s updated hook.
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p><em>update\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2AVNode\u5BF9\u8C61\uFF0C\u5728\u5185\u90E8\u4F1A\u5C06\u8BE5VNode\u5BF9\u8C61\u4E0E\u4E4B\u524D\u65E7\u7684VNode\u5BF9\u8C61\u8FDB\u884C__patch</em>_\u3002</p><p>\u4EC0\u4E48\u662F__patch__\u5462\uFF1F</p><h2 id="patch" tabindex="-1"><a class="header-anchor" href="#patch" aria-hidden="true">#</a> <strong>patch</strong></h2><p>patch\u5C06\u65B0\u8001VNode\u8282\u70B9\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u7136\u540E\u5C06\u6839\u636E\u4E24\u8005\u7684\u6BD4\u8F83\u7ED3\u679C\u8FDB\u884C\u6700\u5C0F\u5355\u4F4D\u5730\u4FEE\u6539\u89C6\u56FE\uFF0C\u800C\u4E0D\u662F\u5C06\u6574\u4E2A\u89C6\u56FE\u6839\u636E\u65B0\u7684VNode\u91CD\u7ED8\u3002patch\u7684\u6838\u5FC3\u5728\u4E8Ediff\u7B97\u6CD5\uFF0C\u8FD9\u5957\u7B97\u6CD5\u53EF\u4EE5\u9AD8\u6548\u5730\u6BD4\u8F83virtual DOM\u7684\u53D8\u66F4\uFF0C\u5F97\u51FA\u53D8\u5316\u4EE5\u4FEE\u6539\u89C6\u56FE\u3002</p><p>\u90A3\u4E48patch\u5982\u4F55\u5DE5\u4F5C\u7684\u5462\uFF1F</p><p>\u9996\u5148\u8BF4\u4E00\u4E0Bpatch\u7684\u6838\u5FC3diff\u7B97\u6CD5\uFF0Cdiff\u7B97\u6CD5\u662F\u901A\u8FC7\u540C\u5C42\u7684\u6811\u8282\u70B9\u8FDB\u884C\u6BD4\u8F83\u800C\u975E\u5BF9\u6811\u8FDB\u884C\u9010\u5C42\u641C\u7D22\u904D\u5386\u7684\u65B9\u5F0F\uFF0C\u6240\u4EE5\u65F6\u95F4\u590D\u6742\u5EA6\u53EA\u6709O(n)\uFF0C\u662F\u4E00\u79CD\u76F8\u5F53\u9AD8\u6548\u7684\u7B97\u6CD5\u3002</p><p><img src="https://i.loli.net/2017/08/27/59a23cfca50f3.png" alt="img"></p><p><img src="https://i.loli.net/2017/08/27/59a2419a3c617.png" alt="img"></p><p>\u8FD9\u4E24\u5F20\u56FE\u4EE3\u8868\u65E7\u7684VNode\u4E0E\u65B0VNode\u8FDB\u884Cpatch\u7684\u8FC7\u7A0B\uFF0C\u4ED6\u4EEC\u53EA\u662F\u5728\u540C\u5C42\u7EA7\u7684VNode\u4E4B\u95F4\u8FDB\u884C\u6BD4\u8F83\u5F97\u5230\u53D8\u5316\uFF08\u7B2C\u4E8C\u5F20\u56FE\u4E2D\u76F8\u540C\u989C\u8272\u7684\u65B9\u5757\u4EE3\u8868\u4E92\u76F8\u8FDB\u884C\u6BD4\u8F83\u7684VNode\u8282\u70B9\uFF09\uFF0C\u7136\u540E\u4FEE\u6539\u53D8\u5316\u7684\u89C6\u56FE\uFF0C\u6240\u4EE5\u5341\u5206\u9AD8\u6548\u3002</p><p>\u8BA9\u770B\u4E00\u4E0Bpatch\u7684\u4EE3\u7801\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>  /*createPatchFunction\u7684\u8FD4\u56DE\u503C\uFF0C\u4E00\u4E2Apatch\u51FD\u6570*/
  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    /*vnode\u4E0D\u5B58\u5728\u5219\u76F4\u63A5\u8C03\u7528\u9500\u6BC1\u94A9\u5B50*/
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) invokeDestroyHook(oldVnode)
      return
    }

    let isInitialPatch = false
    const insertedVnodeQueue = []

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      /*oldVnode\u672A\u5B9A\u4E49\u7684\u65F6\u5019\uFF0C\u5176\u5B9E\u4E5F\u5C31\u662Froot\u8282\u70B9\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8282\u70B9*/
      isInitialPatch = true
      createElm(vnode, insertedVnodeQueue, parentElm, refElm)
    } else {
      /*\u6807\u8BB0\u65E7\u7684VNode\u662F\u5426\u6709nodeType*/
      /*Github:https://github.com/answershuto*/
      const isRealElement = isDef(oldVnode.nodeType)
      if (!isRealElement &amp;&amp; sameVnode(oldVnode, vnode)) {
        // patch existing root node
        /*\u662F\u540C\u4E00\u4E2A\u8282\u70B9\u7684\u65F6\u5019\u76F4\u63A5\u4FEE\u6539\u73B0\u6709\u7684\u8282\u70B9*/
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 &amp;&amp; oldVnode.hasAttribute(SSR_ATTR)) {
            /*\u5F53\u65E7\u7684VNode\u662F\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u5143\u7D20\uFF0Chydrating\u8BB0\u4E3Atrue*/
            oldVnode.removeAttribute(SSR_ATTR)
            hydrating = true
          }
          if (isTrue(hydrating)) {
            /*\u9700\u8981\u5408\u5E76\u5230\u771F\u5B9EDOM\u4E0A*/
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              /*\u8C03\u7528insert\u94A9\u5B50*/
              invokeInsertHook(vnode, insertedVnodeQueue, true)
              return oldVnode
            } else if (p<wbr>rocess.env.NODE_ENV !== &#39;production&#39;) {
              warn(
                &#39;The client-side rendered virtual DOM tree is not matching &#39; +
                &#39;server-rendered content. This is likely caused by incorrect &#39; +
                &#39;HTML markup, for example nesting block-level elements inside &#39; +
                &#39;&lt;p&gt;, or missing &lt;tbody&gt;. Bailing hydration and performing &#39; +
                &#39;full client-side render.&#39;
              )
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          /*\u5982\u679C\u4E0D\u662F\u670D\u52A1\u7AEF\u6E32\u67D3\u6216\u8005\u5408\u5E76\u5230\u771F\u5B9EDOM\u5931\u8D25\uFF0C\u5219\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684VNode\u8282\u70B9\u66FF\u6362\u5B83*/
          oldVnode = emptyNodeAt(oldVnode)
        }
        // replacing existing element
        /*\u53D6\u4EE3\u73B0\u6709\u5143\u7D20*/
        const oldElm = oldVnode.elm
        const parentElm = nodeOps.parentNode(oldElm)
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        )

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          /*\u7EC4\u4EF6\u6839\u8282\u70B9\u88AB\u66FF\u6362\uFF0C\u904D\u5386\u66F4\u65B0\u7236\u8282\u70B9element*/
          let ancestor = vnode.parent
          while (ancestor) {
            ancestor.elm = vnode.elm
            ancestor = ancestor.parent
          }
          if (isPatchable(vnode)) {
            /*\u8C03\u7528create\u56DE\u8C03*/
            for (let i = 0; i &lt; cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent)
            }
          }
        }

        if (isDef(parentElm)) {
          /*\u79FB\u9664\u8001\u8282\u70B9*/
          removeVnodes(parentElm, [oldVnode], 0, 0)
        } else if (isDef(oldVnode.tag)) {
          /*Github:https://github.com/answershuto*/
          /*\u8C03\u7528destroy\u94A9\u5B50*/
          invokeDestroyHook(oldVnode)
        }
      }
    }

    /*\u8C03\u7528insert\u94A9\u5B50*/
    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
    return vnode.elm
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br></div></div><p>\u4ECE\u4EE3\u7801\u4E2D\u4E0D\u96BE\u53D1\u73B0\uFF0C\u5F53oldVnode\u4E0Evnode\u5728sameVnode\u7684\u65F6\u5019\u624D\u4F1A\u8FDB\u884CpatchVnode\uFF0C\u4E5F\u5C31\u662F\u65B0\u65E7VNode\u8282\u70B9\u5224\u5B9A\u4E3A\u540C\u4E00\u8282\u70B9\u7684\u65F6\u5019\u624D\u4F1A\u8FDB\u884CpatchVnode\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u5426\u5219\u5C31\u662F\u521B\u5EFA\u65B0\u7684DOM\uFF0C\u79FB\u9664\u65E7\u7684DOM\u3002</p><p>\u600E\u4E48\u6837\u7684\u8282\u70B9\u7B97sameVnode\u5462\uFF1F</p><h2 id="samevnode" tabindex="-1"><a class="header-anchor" href="#samevnode" aria-hidden="true">#</a> sameVnode</h2><p>\u6765\u770B\u4E00\u4E0BsameVnode\u7684\u5B9E\u73B0\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/*
  \u5224\u65AD\u4E24\u4E2AVNode\u8282\u70B9\u662F\u5426\u662F\u540C\u4E00\u4E2A\u8282\u70B9\uFF0C\u9700\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6
  key\u76F8\u540C
  tag\uFF08\u5F53\u524D\u8282\u70B9\u7684\u6807\u7B7E\u540D\uFF09\u76F8\u540C
  isComment\uFF08\u662F\u5426\u4E3A\u6CE8\u91CA\u8282\u70B9\uFF09\u76F8\u540C
  \u662F\u5426data\uFF08\u5F53\u524D\u8282\u70B9\u5BF9\u5E94\u7684\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u5177\u4F53\u7684\u4E00\u4E9B\u6570\u636E\u4FE1\u606F\uFF0C\u662F\u4E00\u4E2AVNodeData\u7C7B\u578B\uFF0C\u53EF\u4EE5\u53C2\u8003VNodeData\u7C7B\u578B\u4E2D\u7684\u6570\u636E\u4FE1\u606F\uFF09\u90FD\u6709\u5B9A\u4E49
  \u5F53\u6807\u7B7E\u662F&lt;input&gt;\u7684\u65F6\u5019\uFF0Ctype\u5FC5\u987B\u76F8\u540C
*/
function sameVnode (a, b) {
  return (
    a.key === b.key &amp;&amp;
    a.tag === b.tag &amp;&amp;
    a.isComment === b.isComment &amp;&amp;
    isDef(a.data) === isDef(b.data) &amp;&amp;
    sameInputType(a, b)
  )
}

// Some browsers do not support dynamically changing type for &lt;input&gt;
// so they need to be treated as different nodes
/*
  \u5224\u65AD\u5F53\u6807\u7B7E\u662F&lt;input&gt;\u7684\u65F6\u5019\uFF0Ctype\u662F\u5426\u76F8\u540C
  \u67D0\u4E9B\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u52A8\u6001\u4FEE\u6539&lt;input&gt;\u7C7B\u578B\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u88AB\u89C6\u4E3A\u4E0D\u540C\u8282\u70B9
*/
function sameInputType (a, b) {
  if (a.tag !== &#39;input&#39;) return true
  let i
  const typeA = isDef(i = a.data) &amp;&amp; isDef(i = i.attrs) &amp;&amp; i.type
  const typeB = isDef(i = b.data) &amp;&amp; isDef(i = i.attrs) &amp;&amp; i.type
  return typeA === typeB
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u5F53\u4E24\u4E2AVNode\u7684tag\u3001key\u3001isComment\u90FD\u76F8\u540C\uFF0C\u5E76\u4E14\u540C\u65F6\u5B9A\u4E49\u6216\u672A\u5B9A\u4E49data\u7684\u65F6\u5019\uFF0C\u4E14\u5982\u679C\u6807\u7B7E\u4E3Ainput\u5219type\u5FC5\u987B\u76F8\u540C\u3002\u8FD9\u65F6\u5019\u8FD9\u4E24\u4E2AVNode\u5219\u7B97sameVnode\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884CpatchVnode\u64CD\u4F5C\u3002</p><h2 id="patchvnode" tabindex="-1"><a class="header-anchor" href="#patchvnode" aria-hidden="true">#</a> patchVnode</h2><p>\u8FD8\u662F\u5148\u6765\u770B\u4E00\u4E0BpatchVnode\u7684\u4EE3\u7801\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>  /*patch VNode\u8282\u70B9*/
  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    /*\u4E24\u4E2AVNode\u8282\u70B9\u76F8\u540C\u5219\u76F4\u63A5\u8FD4\u56DE*/
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    /*
      \u5982\u679C\u65B0\u65E7VNode\u90FD\u662F\u9759\u6001\u7684\uFF0C\u540C\u65F6\u5B83\u4EEC\u7684key\u76F8\u540C\uFF08\u4EE3\u8868\u540C\u4E00\u8282\u70B9\uFF09\uFF0C
      \u5E76\u4E14\u65B0\u7684VNode\u662Fclone\u6216\u8005\u662F\u6807\u8BB0\u4E86once\uFF08\u6807\u8BB0v-once\u5C5E\u6027\uFF0C\u53EA\u6E32\u67D3\u4E00\u6B21\uFF09\uFF0C
      \u90A3\u4E48\u53EA\u9700\u8981\u66FF\u6362elm\u4EE5\u53CAcomponentInstance\u5373\u53EF\u3002
    */
    if (isTrue(vnode.isStatic) &amp;&amp;
        isTrue(oldVnode.isStatic) &amp;&amp;
        vnode.key === oldVnode.key &amp;&amp;
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.elm = oldVnode.elm
      vnode.componentInstance = oldVnode.componentInstance
      return
    }
    let i
    const data = vnode.data
    if (isDef(data) &amp;&amp; isDef(i = data.hook) &amp;&amp; isDef(i = i.prepatch)) {
      /*i = data.hook.prepatch\uFF0C\u5982\u679C\u5B58\u5728\u7684\u8BDD\uFF0C\u89C1&quot;./create-component componentVNodeHooks&quot;\u3002*/
      i(oldVnode, vnode)
    }
    const elm = vnode.elm = oldVnode.elm
    const oldCh = oldVnode.children
    const ch = vnode.children
    if (isDef(data) &amp;&amp; isPatchable(vnode)) {
      /*\u8C03\u7528update\u56DE\u8C03\u4EE5\u53CAupdate\u94A9\u5B50*/
      for (i = 0; i &lt; cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
      if (isDef(i = data.hook) &amp;&amp; isDef(i = i.update)) i(oldVnode, vnode)
    }
    /*\u5982\u679C\u8FD9\u4E2AVNode\u8282\u70B9\u6CA1\u6709text\u6587\u672C\u65F6*/
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) &amp;&amp; isDef(ch)) {
        /*\u65B0\u8001\u8282\u70B9\u5747\u6709children\u5B50\u8282\u70B9\uFF0C\u5219\u5BF9\u5B50\u8282\u70B9\u8FDB\u884Cdiff\u64CD\u4F5C\uFF0C\u8C03\u7528updateChildren*/
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
      } else if (isDef(ch)) {
        /*\u5982\u679C\u8001\u8282\u70B9\u6CA1\u6709\u5B50\u8282\u70B9\u800C\u65B0\u8282\u70B9\u5B58\u5728\u5B50\u8282\u70B9\uFF0C\u5148\u6E05\u7A7Aelm\u7684\u6587\u672C\u5185\u5BB9\uFF0C\u7136\u540E\u4E3A\u5F53\u524D\u8282\u70B9\u52A0\u5165\u5B50\u8282\u70B9*/
        if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, &#39;&#39;)
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
      } else if (isDef(oldCh)) {
        /*\u5F53\u65B0\u8282\u70B9\u6CA1\u6709\u5B50\u8282\u70B9\u800C\u8001\u8282\u70B9\u6709\u5B50\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u5219\u79FB\u9664\u6240\u6709ele\u7684\u5B50\u8282\u70B9*/
        removeVnodes(elm, oldCh, 0, oldCh.length - 1)
      } else if (isDef(oldVnode.text)) {
        /*\u5F53\u65B0\u8001\u8282\u70B9\u90FD\u65E0\u5B50\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u53EA\u662F\u6587\u672C\u7684\u66FF\u6362\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u903B\u8F91\u4E2D\u65B0\u8282\u70B9text\u4E0D\u5B58\u5728\uFF0C\u6240\u4EE5\u76F4\u63A5\u53BB\u9664ele\u7684\u6587\u672C*/
        nodeOps.setTextContent(elm, &#39;&#39;)
      }
    } else if (oldVnode.text !== vnode.text) {
      /*\u5F53\u65B0\u8001\u8282\u70B9text\u4E0D\u4E00\u6837\u65F6\uFF0C\u76F4\u63A5\u66FF\u6362\u8FD9\u6BB5\u6587\u672C*/
      nodeOps.setTextContent(elm, vnode.text)
    }
    /*\u8C03\u7528postpatch\u94A9\u5B50*/
    if (isDef(data)) {
      if (isDef(i = data.hook) &amp;&amp; isDef(i = i.postpatch)) i(oldVnode, vnode)
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><p>patchVnode\u7684\u89C4\u5219\u662F\u8FD9\u6837\u7684\uFF1A</p><p>1.\u5982\u679C\u65B0\u65E7VNode\u90FD\u662F\u9759\u6001\u7684\uFF0C\u540C\u65F6\u5B83\u4EEC\u7684key\u76F8\u540C\uFF08\u4EE3\u8868\u540C\u4E00\u8282\u70B9\uFF09\uFF0C\u5E76\u4E14\u65B0\u7684VNode\u662Fclone\u6216\u8005\u662F\u6807\u8BB0\u4E86once\uFF08\u6807\u8BB0v-once\u5C5E\u6027\uFF0C\u53EA\u6E32\u67D3\u4E00\u6B21\uFF09\uFF0C\u90A3\u4E48\u53EA\u9700\u8981\u66FF\u6362elm\u4EE5\u53CAcomponentInstance\u5373\u53EF\u3002</p><p>2.\u65B0\u8001\u8282\u70B9\u5747\u6709children\u5B50\u8282\u70B9\uFF0C\u5219\u5BF9\u5B50\u8282\u70B9\u8FDB\u884Cdiff\u64CD\u4F5C\uFF0C\u8C03\u7528updateChildren\uFF0C\u8FD9\u4E2AupdateChildren\u4E5F\u662Fdiff\u7684\u6838\u5FC3\u3002</p><p>3.\u5982\u679C\u8001\u8282\u70B9\u6CA1\u6709\u5B50\u8282\u70B9\u800C\u65B0\u8282\u70B9\u5B58\u5728\u5B50\u8282\u70B9\uFF0C\u5148\u6E05\u7A7A\u8001\u8282\u70B9DOM\u7684\u6587\u672C\u5185\u5BB9\uFF0C\u7136\u540E\u4E3A\u5F53\u524DDOM\u8282\u70B9\u52A0\u5165\u5B50\u8282\u70B9\u3002</p><p>4.\u5F53\u65B0\u8282\u70B9\u6CA1\u6709\u5B50\u8282\u70B9\u800C\u8001\u8282\u70B9\u6709\u5B50\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u5219\u79FB\u9664\u8BE5DOM\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9\u3002</p><p>5.\u5F53\u65B0\u8001\u8282\u70B9\u90FD\u65E0\u5B50\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u53EA\u662F\u6587\u672C\u7684\u66FF\u6362\u3002</p><h2 id="updatechildren" tabindex="-1"><a class="header-anchor" href="#updatechildren" aria-hidden="true">#</a> updateChildren</h2><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    let oldStartIdx = 0
    let newStartIdx = 0
    let oldEndIdx = oldCh.length - 1
    let oldStartVnode = oldCh[0]
    let oldEndVnode = oldCh[oldEndIdx]
    let newEndIdx = newCh.length - 1
    let newStartVnode = newCh[0]
    let newEndVnode = newCh[newEndIdx]
    let oldKeyToIdx, idxInOld, elmToMove, refElm

    // removeOnly is a special flag used only by &lt;transition-group&gt;
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    const canMove = !removeOnly

    while (oldStartIdx &lt;= oldEndIdx &amp;&amp; newStartIdx &lt;= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx]
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        /*\u524D\u56DB\u79CD\u60C5\u51B5\u5176\u5B9E\u662F\u6307\u5B9Akey\u7684\u65F6\u5019\uFF0C\u5224\u5B9A\u4E3A\u540C\u4E00\u4E2AVNode\uFF0C\u5219\u76F4\u63A5patchVnode\u5373\u53EF\uFF0C\u5206\u522B\u6BD4\u8F83oldCh\u4EE5\u53CAnewCh\u7684\u4E24\u5934\u8282\u70B92*2=4\u79CD\u60C5\u51B5*/
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
        canMove &amp;&amp; nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
        canMove &amp;&amp; nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]
      } else {
        /*
          \u751F\u6210\u4E00\u4E2Akey\u4E0E\u65E7VNode\u7684key\u5BF9\u5E94\u7684\u54C8\u5E0C\u8868\uFF08\u53EA\u6709\u7B2C\u4E00\u6B21\u8FDB\u6765undefined\u7684\u65F6\u5019\u4F1A\u751F\u6210\uFF0C\u4E5F\u4E3A\u540E\u9762\u68C0\u6D4B\u91CD\u590D\u7684key\u503C\u505A\u94FA\u57AB\uFF09
          \u6BD4\u5982childre\u662F\u8FD9\u6837\u7684 [{xx: xx, key: &#39;key0&#39;}, {xx: xx, key: &#39;key1&#39;}, {xx: xx, key: &#39;key2&#39;}]  beginIdx = 0   endIdx = 2  
          \u7ED3\u679C\u751F\u6210{key0: 0, key1: 1, key2: 2}
        */
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
        /*\u5982\u679CnewStartVnode\u65B0\u7684VNode\u8282\u70B9\u5B58\u5728key\u5E76\u4E14\u8FD9\u4E2Akey\u5728oldVnode\u4E2D\u80FD\u627E\u5230\u5219\u8FD4\u56DE\u8FD9\u4E2A\u8282\u70B9\u7684idxInOld\uFF08\u5373\u7B2C\u51E0\u4E2A\u8282\u70B9\uFF0C\u4E0B\u6807\uFF09*/
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null
        if (isUndef(idxInOld)) { // New element
          /*newStartVnode\u6CA1\u6709key\u6216\u8005\u662F\u8BE5key\u6CA1\u6709\u5728\u8001\u8282\u70B9\u4E2D\u627E\u5230\u5219\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8282\u70B9*/
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)
          newStartVnode = newCh[++newStartIdx]
        } else {
          /*\u83B7\u53D6\u540Ckey\u7684\u8001\u8282\u70B9*/
          elmToMove = oldCh[idxInOld]
          /* istanbul ignore if */
          if (p<wbr>rocess.env.NODE_ENV !== &#39;production&#39; &amp;&amp; !elmToMove) {
            /*\u5982\u679CelmToMove\u4E0D\u5B58\u5728\u8BF4\u660E\u4E4B\u524D\u5DF2\u7ECF\u6709\u65B0\u8282\u70B9\u653E\u5165\u8FC7\u8FD9\u4E2Akey\u7684DOM\u4E2D\uFF0C\u63D0\u793A\u53EF\u80FD\u5B58\u5728\u91CD\u590D\u7684key\uFF0C\u786E\u4FDDv-for\u7684\u65F6\u5019item\u6709\u552F\u4E00\u7684key\u503C*/
            warn(
              &#39;It seems there are duplicate keys that is causing an update error. &#39; +
              &#39;Make sure each v-for item has a unique key.&#39;
            )
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            /*Github:https://github.com/answershuto*/
            /*\u5982\u679C\u65B0VNode\u4E0E\u5F97\u5230\u7684\u6709\u76F8\u540Ckey\u7684\u8282\u70B9\u662F\u540C\u4E00\u4E2AVNode\u5219\u8FDB\u884CpatchVnode*/
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
            /*\u56E0\u4E3A\u5DF2\u7ECFpatchVnode\u8FDB\u53BB\u4E86\uFF0C\u6240\u4EE5\u5C06\u8FD9\u4E2A\u8001\u8282\u70B9\u8D4B\u503Cundefined\uFF0C\u4E4B\u540E\u5982\u679C\u8FD8\u6709\u65B0\u8282\u70B9\u4E0E\u8BE5\u8282\u70B9key\u76F8\u540C\u53EF\u4EE5\u68C0\u6D4B\u51FA\u6765\u63D0\u793A\u5DF2\u6709\u91CD\u590D\u7684key*/
            oldCh[idxInOld] = undefined
            /*\u5F53\u6709\u6807\u8BC6\u4F4DcanMove\u5B9E\u53EF\u4EE5\u76F4\u63A5\u63D2\u5165oldStartVnode\u5BF9\u5E94\u7684\u771F\u5B9EDOM\u8282\u70B9\u524D\u9762*/
            canMove &amp;&amp; nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm)
            newStartVnode = newCh[++newStartIdx]
          } else {
            // same key but different element. treat as new element
            /*\u5F53\u65B0\u7684VNode\u4E0E\u627E\u5230\u7684\u540C\u6837key\u7684VNode\u4E0D\u662FsameVNode\u7684\u65F6\u5019\uFF08\u6BD4\u5982\u8BF4tag\u4E0D\u4E00\u6837\u6216\u8005\u662F\u6709\u4E0D\u4E00\u6837type\u7684input\u6807\u7B7E\uFF09\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8282\u70B9*/
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)
            newStartVnode = newCh[++newStartIdx]
          }
        }
      }
    }
    if (oldStartIdx &gt; oldEndIdx) {
      /*\u5168\u90E8\u6BD4\u8F83\u5B8C\u6210\u4EE5\u540E\uFF0C\u53D1\u73B0oldStartIdx &gt; oldEndIdx\u7684\u8BDD\uFF0C\u8BF4\u660E\u8001\u8282\u70B9\u5DF2\u7ECF\u904D\u5386\u5B8C\u4E86\uFF0C\u65B0\u8282\u70B9\u6BD4\u8001\u8282\u70B9\u591A\uFF0C\u6240\u4EE5\u8FD9\u65F6\u5019\u591A\u51FA\u6765\u7684\u65B0\u8282\u70B9\u9700\u8981\u4E00\u4E2A\u4E00\u4E2A\u521B\u5EFA\u51FA\u6765\u52A0\u5165\u5230\u771F\u5B9EDOM\u4E2D*/
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
    } else if (newStartIdx &gt; newEndIdx) {
      /*\u5982\u679C\u5168\u90E8\u6BD4\u8F83\u5B8C\u6210\u4EE5\u540E\u53D1\u73B0newStartIdx &gt; newEndIdx\uFF0C\u5219\u8BF4\u660E\u65B0\u8282\u70B9\u5DF2\u7ECF\u904D\u5386\u5B8C\u4E86\uFF0C\u8001\u8282\u70B9\u591A\u4F59\u65B0\u8282\u70B9\uFF0C\u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u5C06\u591A\u4F59\u7684\u8001\u8282\u70B9\u4ECE\u771F\u5B9EDOM\u4E2D\u79FB\u9664*/
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><p>\u76F4\u63A5\u770B\u6E90\u7801\u53EF\u80FD\u6BD4\u8F83\u96BE\u4EE5\u634B\u6E05\u5176\u4E2D\u7684\u5173\u7CFB\uFF0C\u901A\u8FC7\u56FE\u6765\u770B\u4E00\u4E0B\u3002</p><p><img src="https://i.loli.net/2017/08/28/59a4015bb2765.png" alt="img"></p><p>\u9996\u5148\uFF0C\u5728\u65B0\u8001\u4E24\u4E2AVNode\u8282\u70B9\u7684\u5DE6\u53F3\u5934\u5C3E\u4E24\u4FA7\u90FD\u6709\u4E00\u4E2A\u53D8\u91CF\u6807\u8BB0\uFF0C\u5728\u904D\u5386\u8FC7\u7A0B\u4E2D\u8FD9\u51E0\u4E2A\u53D8\u91CF\u90FD\u4F1A\u5411\u4E2D\u95F4\u9760\u62E2\u3002\u5F53oldStartIdx &gt; oldEndIdx\u6216\u8005newStartIdx &gt; newEndIdx\u65F6\u7ED3\u675F\u5FAA\u73AF\u3002</p><p>\u7D22\u5F15\u4E0EVNode\u8282\u70B9\u7684\u5BF9\u5E94\u5173\u7CFB\uFF1A oldStartIdx =&gt; oldStartVnode oldEndIdx =&gt; oldEndVnode newStartIdx =&gt; newStartVnode newEndIdx =&gt; newEndVnode</p><p>\u5728\u904D\u5386\u4E2D\uFF0C\u5982\u679C\u5B58\u5728key\uFF0C\u5E76\u4E14\u6EE1\u8DB3sameVnode\uFF0C\u4F1A\u5C06\u8BE5DOM\u8282\u70B9\u8FDB\u884C\u590D\u7528\uFF0C\u5426\u5219\u5219\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684DOM\u8282\u70B9\u3002</p><p>\u9996\u5148\uFF0ColdStartVnode\u3001oldEndVnode\u4E0EnewStartVnode\u3001newEndVnode\u4E24\u4E24\u6BD4\u8F83\u4E00\u5171\u67092*2=4\u79CD\u6BD4\u8F83\u65B9\u6CD5\u3002</p><p>\u5F53\u65B0\u8001VNode\u8282\u70B9\u7684start\u6216\u8005end\u6EE1\u8DB3sameVnode\u65F6\uFF0C\u4E5F\u5C31\u662FsameVnode(oldStartVnode, newStartVnode)\u6216\u8005sameVnode(oldEndVnode, newEndVnode)\uFF0C\u76F4\u63A5\u5C06\u8BE5VNode\u8282\u70B9\u8FDB\u884CpatchVnode\u5373\u53EF\u3002</p><p><img src="https://i.loli.net/2017/08/28/59a40c12c1655.png" alt="img"></p><p>\u5982\u679ColdStartVnode\u4E0EnewEndVnode\u6EE1\u8DB3sameVnode\uFF0C\u5373sameVnode(oldStartVnode, newEndVnode)\u3002</p><p>\u8FD9\u65F6\u5019\u8BF4\u660EoldStartVnode\u5DF2\u7ECF\u8DD1\u5230\u4E86oldEndVnode\u540E\u9762\u53BB\u4E86\uFF0C\u8FDB\u884CpatchVnode\u7684\u540C\u65F6\u8FD8\u9700\u8981\u5C06\u771F\u5B9EDOM\u8282\u70B9\u79FB\u52A8\u5230oldEndVnode\u7684\u540E\u9762\u3002</p><p><img src="https://ooo.0o0.ooo/2017/08/28/59a4214784979.png" alt="img"></p><p>\u5982\u679ColdEndVnode\u4E0EnewStartVnode\u6EE1\u8DB3sameVnode\uFF0C\u5373sameVnode(oldEndVnode, newStartVnode)\u3002</p><p>\u8FD9\u8BF4\u660EoldEndVnode\u8DD1\u5230\u4E86oldStartVnode\u7684\u524D\u9762\uFF0C\u8FDB\u884CpatchVnode\u7684\u540C\u65F6\u771F\u5B9E\u7684DOM\u8282\u70B9\u79FB\u52A8\u5230\u4E86oldStartVnode\u7684\u524D\u9762\u3002</p><p><img src="https://i.loli.net/2017/08/29/59a4c70685d12.png" alt="img"></p><p>\u5982\u679C\u4EE5\u4E0A\u60C5\u51B5\u5747\u4E0D\u7B26\u5408\uFF0C\u5219\u901A\u8FC7createKeyToOldIdx\u4F1A\u5F97\u5230\u4E00\u4E2AoldKeyToIdx\uFF0C\u91CC\u9762\u5B58\u653E\u4E86\u4E00\u4E2Akey\u4E3A\u65E7\u7684VNode\uFF0Cvalue\u4E3A\u5BF9\u5E94index\u5E8F\u5217\u7684\u54C8\u5E0C\u8868\u3002\u4ECE\u8FD9\u4E2A\u54C8\u5E0C\u8868\u4E2D\u53EF\u4EE5\u627E\u5230\u662F\u5426\u6709\u4E0EnewStartVnode\u4E00\u81F4key\u7684\u65E7\u7684VNode\u8282\u70B9\uFF0C\u5982\u679C\u540C\u65F6\u6EE1\u8DB3sameVnode\uFF0CpatchVnode\u7684\u540C\u65F6\u4F1A\u5C06\u8FD9\u4E2A\u771F\u5B9EDOM\uFF08elmToMove\uFF09\u79FB\u52A8\u5230oldStartVnode\u5BF9\u5E94\u7684\u771F\u5B9EDOM\u7684\u524D\u9762\u3002</p><p><img src="https://i.loli.net/2017/08/29/59a4d7552d299.png" alt="img"></p><p>\u5F53\u7136\u4E5F\u6709\u53EF\u80FDnewStartVnode\u5728\u65E7\u7684VNode\u8282\u70B9\u627E\u4E0D\u5230\u4E00\u81F4\u7684key\uFF0C\u6216\u8005\u662F\u5373\u4FBFkey\u76F8\u540C\u5374\u4E0D\u662FsameVnode\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F1A\u8C03\u7528createElm\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684DOM\u8282\u70B9\u3002</p><p><img src="https://i.loli.net/2017/08/29/59a4de0fa4dba.png" alt="img"></p><p>\u5230\u8FD9\u91CC\u5FAA\u73AF\u5DF2\u7ECF\u7ED3\u675F\u4E86\uFF0C\u90A3\u4E48\u5269\u4E0B\u8FD8\u9700\u8981\u5904\u7406\u591A\u4F59\u6216\u8005\u4E0D\u591F\u7684\u771F\u5B9EDOM\u8282\u70B9\u3002</p><p>1.\u5F53\u7ED3\u675F\u65F6oldStartIdx &gt; oldEndIdx\uFF0C\u8FD9\u4E2A\u65F6\u5019\u8001\u7684VNode\u8282\u70B9\u5DF2\u7ECF\u904D\u5386\u5B8C\u4E86\uFF0C\u4F46\u662F\u65B0\u7684\u8282\u70B9\u8FD8\u6CA1\u6709\u3002\u8BF4\u660E\u4E86\u65B0\u7684VNode\u8282\u70B9\u5B9E\u9645\u4E0A\u6BD4\u8001\u7684VNode\u8282\u70B9\u591A\uFF0C\u4E5F\u5C31\u662F\u6BD4\u771F\u5B9EDOM\u591A\uFF0C\u9700\u8981\u5C06\u5269\u4E0B\u7684\uFF08\u4E5F\u5C31\u662F\u65B0\u589E\u7684\uFF09VNode\u8282\u70B9\u63D2\u5165\u5230\u771F\u5B9EDOM\u8282\u70B9\u4E2D\u53BB\uFF0C\u6B64\u65F6\u8C03\u7528addVnodes\uFF08\u6279\u91CF\u8C03\u7528createElm\u7684\u63A5\u53E3\u5C06\u8FD9\u4E9B\u8282\u70B9\u52A0\u5165\u5230\u771F\u5B9EDOM\u4E2D\u53BB\uFF09\u3002</p><p><img src="https://i.loli.net/2017/08/29/59a509f0d1788.png" alt="img"></p><p>2\u3002\u540C\u7406\uFF0C\u5F53newStartIdx &gt; newEndIdx\u65F6\uFF0C\u65B0\u7684VNode\u8282\u70B9\u5DF2\u7ECF\u904D\u5386\u5B8C\u4E86\uFF0C\u4F46\u662F\u8001\u7684\u8282\u70B9\u8FD8\u6709\u5269\u4F59\uFF0C\u8BF4\u660E\u771F\u5B9EDOM\u8282\u70B9\u591A\u4F59\u4E86\uFF0C\u9700\u8981\u4ECE\u6587\u6863\u4E2D\u5220\u9664\uFF0C\u8FD9\u65F6\u5019\u8C03\u7528removeVnodes\u5C06\u8FD9\u4E9B\u591A\u4F59\u7684\u771F\u5B9EDOM\u5220\u9664\u3002</p><p><img src="https://i.loli.net/2017/08/29/59a4f389b98cb.png" alt="img"></p><h2 id="dom\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#dom\u64CD\u4F5C" aria-hidden="true">#</a> DOM\u64CD\u4F5C</h2><p>\u7531\u4E8EVue\u4F7F\u7528\u4E86\u865A\u62DFDOM\uFF0C\u6240\u4EE5\u865A\u62DFDOM\u53EF\u4EE5\u5728\u4EFB\u4F55\u652F\u6301JavaScript\u8BED\u8A00\u7684\u5E73\u53F0\u4E0A\u64CD\u4F5C\uFF0C\u8B6C\u5982\u8BF4\u76EE\u524DVue\u652F\u6301\u7684\u6D4F\u89C8\u5668\u5E73\u53F0\u6216\u662Fweex\uFF0C\u5728\u865A\u62DFDOM\u7684\u5B9E\u73B0\u4E0A\u662F\u4E00\u81F4\u7684\u3002\u90A3\u4E48\u6700\u540E\u865A\u62DFDOM\u5982\u4F55\u6620\u5C04\u5230\u771F\u5B9E\u7684DOM\u8282\u70B9\u4E0A\u5462\uFF1F</p>`,57),x=e("Vue\u4E3A\u5E73\u53F0\u505A\u4E86\u4E00\u5C42\u9002\u914D\u5C42\uFF0C\u6D4F\u89C8\u5668\u5E73\u53F0\u89C1"),_={href:"https://github.com/answershuto/learnVue/blob/master/vue-src/platforms/web/runtime/node-ops.js",target:"_blank",rel:"noopener noreferrer"},S=e("/platforms/web/runtime/node-ops.js"),w=e("\u4EE5\u53CAweex\u5E73\u53F0\u89C1"),k={href:"https://github.com/answershuto/learnVue/blob/master/vue-src/platforms/weex/runtime/node-ops.js",target:"_blank",rel:"noopener noreferrer"},E=e("/platforms/weex/runtime/node-ops.js"),D=e("\u3002\u4E0D\u540C\u5E73\u53F0\u4E4B\u95F4\u901A\u8FC7\u9002\u914D\u5C42\u5BF9\u5916\u63D0\u4F9B\u76F8\u540C\u7684\u63A5\u53E3\uFF0C\u865A\u62DFDOM\u8FDB\u884C\u64CD\u4F5C\u771F\u5B9EDOM\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u53EA\u9700\u8981\u8C03\u7528\u8FD9\u4E9B\u9002\u914D\u5C42\u7684\u63A5\u53E3\u5373\u53EF\uFF0C\u800C\u5185\u90E8\u5B9E\u73B0\u5219\u4E0D\u9700\u8981\u5173\u5FC3\uFF0C\u5B83\u4F1A\u6839\u636E\u5E73\u53F0\u7684\u6539\u53D8\u800C\u6539\u53D8\u3002"),O=r(`<p>\u73B0\u5728\u53C8\u51FA\u73B0\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u53EA\u662F\u5C06\u865A\u62DFDOM\u6620\u5C04\u6210\u4E86\u771F\u5B9E\u7684DOM\u3002\u90A3\u5982\u4F55\u7ED9\u8FD9\u4E9BDOM\u52A0\u5165attr\u3001class\u3001style\u7B49DOM\u5C5E\u6027\u5462\uFF1F</p><p>\u8FD9\u8981\u4F9D\u8D56\u4E8E\u865A\u62DFDOM\u7684\u751F\u547D\u94A9\u5B50\u3002\u865A\u62DFDOM\u63D0\u4F9B\u4E86\u5982\u4E0B\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u5206\u522B\u5728\u4E0D\u540C\u7684\u65F6\u671F\u4F1A\u8FDB\u884C\u8C03\u7528\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const hooks = [&#39;create&#39;, &#39;activate&#39;, &#39;update&#39;, &#39;remove&#39;, &#39;destroy&#39;]

/*\u6784\u5EFAcbs\u56DE\u8C03\u51FD\u6570\uFF0Cweb\u5E73\u53F0\u4E0A\u89C1/platforms/web/runtime/modules*/
  for (i = 0; i &lt; hooks.length; ++i) {
    cbs[hooks[i]] = []
    for (j = 0; j &lt; modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]])
      }
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,3),I=e("\u540C\u7406\uFF0C\u4E5F\u4F1A\u6839\u636E\u4E0D\u540C\u5E73\u53F0\u6709\u81EA\u5DF1\u4E0D\u540C\u7684\u5B9E\u73B0\uFF0C\u8FD9\u91CC\u4EE5Web\u5E73\u53F0\u4E3A\u4F8B\u3002Web\u5E73\u53F0\u7684\u94A9\u5B50\u51FD\u6570\u89C1"),N={href:"https://github.com/answershuto/learnVue/tree/master/vue-src/platforms/web/runtime/modules",target:"_blank",rel:"noopener noreferrer"},M=e("/platforms/web/runtime/modules"),C=e("\u3002\u91CC\u9762\u6709\u5BF9attr\u3001class\u3001props\u3001events\u3001style\u4EE5\u53CAtransition\uFF08\u8FC7\u6E21\u72B6\u6001\uFF09\u7684DOM\u5C5E\u6027\u8FDB\u884C\u64CD\u4F5C\u3002"),A=r(`<p>\u4EE5attr\u4E3A\u4F8B\uFF0C\u4EE3\u7801\u5F88\u7B80\u5355\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/* @flow */

import { isIE9 } from &#39;core/util/env&#39;

import {
  extend,
  isDef,
  isUndef
} from &#39;shared/util&#39;

import {
  isXlink,
  xlinkNS,
  getXlinkProp,
  isBooleanAttr,
  isEnumeratedAttr,
  isFalsyAttrValue
} from &#39;web/util/index&#39;

/*\u66F4\u65B0attr*/
function updateAttrs (oldVnode: VNodeWithData, vnode: VNodeWithData) {
  /*\u5982\u679C\u65E7\u7684\u4EE5\u53CA\u65B0\u7684VNode\u8282\u70B9\u5747\u6CA1\u6709attr\u5C5E\u6027\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE*/
  if (isUndef(oldVnode.data.attrs) &amp;&amp; isUndef(vnode.data.attrs)) {
    return
  }
  let key, cur, old
  /*VNode\u8282\u70B9\u5BF9\u5E94\u7684Dom\u5B9E\u4F8B*/
  const elm = vnode.elm
  /*\u65E7VNode\u8282\u70B9\u7684attr*/
  const oldAttrs = oldVnode.data.attrs || {}
  /*\u65B0VNode\u8282\u70B9\u7684attr*/
  let attrs: any = vnode.data.attrs || {}
  // clone observed objects, as the user probably wants to mutate it
  /*\u5982\u679C\u65B0\u7684VNode\u7684attr\u5DF2\u7ECF\u6709__ob__\uFF08\u4EE3\u8868\u5DF2\u7ECF\u88ABObserve\u5904\u7406\u8FC7\u4E86\uFF09\uFF0C \u8FDB\u884C\u6DF1\u62F7\u8D1D*/
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs)
  }

  /*\u904D\u5386attr\uFF0C\u4E0D\u4E00\u81F4\u5219\u66FF\u6362*/
  for (key in attrs) {
    cur = attrs[key]
    old = oldAttrs[key]
    if (old !== cur) {
      setAttr(elm, key, cur)
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 &amp;&amp; attrs.value !== oldAttrs.value) {
    setAttr(elm, &#39;value&#39;, attrs.value)
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key))
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key)
      }
    }
  }
}

/*\u8BBE\u7F6Eattr*/
function setAttr (el: Element, key: string, value: any) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. &lt;option disabled&gt;Select one&lt;/option&gt;
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key)
    } else {
      el.setAttribute(key, key)
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === &#39;false&#39; ? &#39;false&#39; : &#39;true&#39;)
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key))
    } else {
      el.setAttributeNS(xlinkNS, key, value)
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key)
    } else {
      el.setAttribute(key, value)
    }
  }
}

export default {
  create: updateAttrs,
  update: updateAttrs
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div><p>attr\u53EA\u9700\u8981\u5728create\u4EE5\u53CAupdate\u94A9\u5B50\u88AB\u8C03\u7528\u65F6\u66F4\u65B0DOM\u7684attr\u5C5E\u6027\u5373\u53EF\u3002</p>`,3);function T(J,Q){const s=l("ExternalLinkIcon");return p(),t(i,null,[o,c,m,u,h,n("p",null,[V,n("a",v,[f,a(s)]),y]),g,n("p",null,[x,n("a",_,[S,a(s)]),w,n("a",k,[E,a(s)]),D]),O,n("p",null,[I,n("a",N,[M,a(s)]),C]),A],64)}var j=b(d,[["render",T]]);export{j as default};
