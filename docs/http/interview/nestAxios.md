# Nest.js + Axios 实现接口

* url param

* query

* form urlencoded

* form data

* json

## url param

> `url param` 是 `url` 中的参数，`Nest.js` 里通过 :参数名 的方式来声明，然后通过 `@Param(参数名)` 的装饰器取出来注入到 `controller`：

```ts
@Controller('api/person')
export class PersonController {
  @Get(':id')
  urlParm(@Param('id') id: string) {
    return `received: id=${id}`;
  }
}
```

前端代码就是一个 get 方法，参数放在 url 里：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
</head>
<body>
    <script>
        async function urlParam() {
            const res = await axios.get('/api/person/1');
            console.log(res);            
        }
        urlParam();
   </script>
</body>
```

## query

> `query` 是 `url` 中 ? 后的字符串，需要做 `url encode`。

> 在 `Nest.js` 里，通过 `@Query` 装饰器来取：

```ts
@Controller('api/person')
export class PersonController {
  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name},age=${age}`;
  }
}
```

> 前端代码同样是通过 axios 发送一个 get 请求：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
</head>
<body>
    <script>
        async function query() {
            const res = await axios.get('/api/person/find', {
                params: {
                    name: '光',
                    age: 20
                }
            });
            console.log(res);            
        }
        query();
   </script>
</body>
</html>
```

参数通过 `params` 指定，`axios` 会做 `url encode`，不需要自己做。

## html urlencoded

> `html urlencoded` 是通过 `body` 传输数据，其实是把 `query` 字符串放在了 `body` 里，所以需要做 `url encode`：

> 用 `Nest.js` 接收的话，使用 `@Body` 装饰器，`Nest.js` 会解析请求体，然后注入到 `dto` 中。

> `dto` 是 `data transfer object`，就是用于封装传输的数据的对象：

```ts
export class CreatePersonDto {
    name: string;
    age: number;
}
```

```ts
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('api/person')
export class PersonController {
  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`
  }
}
```

前端代码使用 `post` 方式请求，指定 `content` type 为 `application/x-www-form-urlencoded`，用 qs 做下 url encode：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
    <script src="https://unpkg.com/qs@6.10.2/dist/qs.js"></script>
</head>
<body>
    <script>
        async function formUrlEncoded() {
            const res = await axios.post('/api/person', Qs.stringify({
                name: '光',
                age: 20
            }), {
                headers: { 'content-type': 'application/x-www-form-urlencoded' }
            });
            console.log(res);  
        }

        formUrlEncoded();
    </script>
</body>
</html>
```

## json

`json` 需要指定 `content-type` 为 `application/json`，内容会以 `JSON` 的方式传输：

后端代码同样使用 `@Body` 来接收，不需要做啥变动。`form urlencoded` 和 `json` 都是从 `body` 取值，`Nest.js` 内部会根据 `content type` 做区分，使用不同的解析方式。

```ts
@Controller('api/person')
export class PersonController {
  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`
  }
}
```

前端代码使用 axios 发送 post 请求，默认传输 json 就会指定 content type 为 `application/json`，不需要手动指定：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
</head>
<body>
    <script>
        async function json() {
            const res = await axios.post('/api/person', {
                name: '光',
                age: 20
            });
            console.log(res);     
        }
        json();
    </script>
</body>
</html>
```

> json 和 form urlencoded 都不适合传递文件，想传输文件要用 form data：

## form data

> form data 是用 `--------` 作为 `boundary` 分隔传输的内容的：

`Nest.js` 解析 `form data` 使用 `FilesInterceptor` 的拦截器，用 `@UseInterceptors` 装饰器启用，然后通过 `@UploadedFiles` 来取。非文件的内容，同样是通过 `@Body` 来取。

```ts
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('api/person')
export class PersonController {
  @Post('file')
  @UseInterceptors(AnyFilesInterceptor())
  body2(@Body() createPersonDto: CreatePersonDto, @UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return `received: ${JSON.stringify(createPersonDto)}`
  }
}
```

前端代码使用 axios 发送 post 请求，指定 content type 为 `multipart/form-data`：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
</head>
<body>
    <input id="fileInput" type="file" multiple/>
    <script>
        const fileInput = document.querySelector('#fileInput');

        async function formData() {
            const data = new FormData();
            data.set('name','光');
            data.set('age', 20);
            data.set('file1', fileInput.files[0]);
            data.set('file2', fileInput.files[1]);

            const res = await axios.post('/api/person/file', data, {
                headers: { 'content-type': 'multipart/form-data' }
            });
            console.log(res);     
        }

        fileInput.onchange = formData;
    </script>
</body>
</html>
```

`file input` 指定 `multiple` 可以选择多个文件。

## 总结

用 axios 发送请求，使用 Nest.js 起后端服务，实现了 5 种 http/https 的数据传输方式：

其中前两种是 url 中的：

* **url param**： url 中的参数，Nest.js 中使用 @Param 来取

* **query**：url 中 ? 后的字符串，Nest.js 中使用 @Query 来取

后三种是 body 中的：

* **form urlencoded**： 类似 query 字符串，只不过是放在 body 中。Nest.js 中使用 @Body 来取，axios 中需要指定 content type 为 `application/x-www-form-urlencoded`，并且对数据用 qs 做 url encode

* **json**： json 格式的数据。Nest.js 中使用 @Body 来取，axios 中不需要单独指定 content type，axios 内部会处理。

* **form data**：通过 ----- 作为 boundary 分隔的数据。主要用于传输文件，Nest.js 中要使用 FilesInterceptor 来处理，用 @UseInterceptors 来启用。其余部分用 @Body 来取。axios 中需要指定 content type 为 `multipart/form-data`，并且用 FormData 对象来封装传输的内容。