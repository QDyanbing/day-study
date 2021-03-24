Ajax是无需刷新页面就能够从服务器获取数据的一种方法；
  负责Ajax运作的核心对象是XMLHttpRequest(XHR)对象；
  XHR对象由微软最早在IE5中引入，用于通过js从服务器获取XML数据；
  在此之后主流浏览器都实现了相同特性，使XHR成为了Web的一个事实标准；
  同源策略是对ajax的一个主要约束，即ajax只能在相同的域、相同的端口、相同的协议使用；
  试图访问同源策略之外的资源很引发安全错误，除非采用认可的跨域解决方案；
  这个方案叫做cors（跨域资源共享）。图像ping和JSONP是另外两种跨域通信技术，但不如cors稳定；

1、XMLHttpRequest对象
  IE5是最早引入这一对象的浏览器；
  用法：
    使用XHR对象时，要调用的第一个方法是open，他有三个参数，请求类型（get/post）、请求地址、是否异步发送请求；
    var xhr = new XMLHttpRequest();
    xhr.open("get","/api",false)
    需要注意的点是open方法并不会真正的发送请求，而是启动一个请求以备发送；
    要发送一个请求必须调用send方法；
    xhr.send(null)
    send接受一个参数，作为请求主体发送的数据
    请求是同步的js会等到服务器相应之后才会继续执行，收到响应的数据后会自动填充XHR对象；
      responseText 响应主体被返回的文本
      responseXML 响应内容的类型是 "text/xml"/"application/xml"这个属性将包含响应的xml文档；
      status http状态
      statusText 状态说明
    但多数情况下发送的请求都是异步的；

