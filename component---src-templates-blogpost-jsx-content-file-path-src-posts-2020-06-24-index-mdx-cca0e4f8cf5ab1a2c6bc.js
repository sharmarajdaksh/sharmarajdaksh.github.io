"use strict";(self.webpackChunksharmarajdak_sh=self.webpackChunksharmarajdak_sh||[]).push([[337],{7634:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(1151),l=n(7294);function i(e){const t=Object.assign({p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",em:"em",span:"span",code:"code",pre:"pre",a:"a"},(0,a.a)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"You've probably come accross a number of application with the \"",l.createElement(t.strong,null,"Login with Github"),"\" option, and why not - developers love Github more than Google or Facebook. When developing your own side-projects, you often want to implement some sort of authentication or user-data management. But you really don't need to implement your own authentication services for every project - OAuth usign applications like Github does the job perfectly well."),"\n",l.createElement(t.h2,null,"Why should I use Github OAuth, and not my own, superior, custom authentications service?"),"\n",l.createElement(t.p,null,"Using Github OAuth over your own solution has several advantages:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Github's authentication and data management approach is ",l.createElement(t.em,null,"probably")," better than yours (please don't be offended)."),"\n",l.createElement(t.li,null,"Convenient for users, since they won't need to manage another password."),"\n",l.createElement(t.li,null,"Quicker to implement (compared to your own solution). This is a very important, but perhaps neglected point for developer side projects. You don't want to spend forever on a single project (unless you really know you do)."),"\n",l.createElement(t.li,null,"Simple to understand and implement."),"\n"),"\n",l.createElement(t.h2,null,"Okay, I might try it. But how does it work?"),"\n",l.createElement(t.p,null,"Let's try to understand the authentication through the following diagram."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 536px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/4c376e1b3cb4e308ba8e411f12820616/2d920/oauthflow.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7ElEQVR42pWU2WpCQRBE8//fI/jgg6AoKu77vu+o4L7byenQF70aogOTmdyerqnuqvFLfsblcpHD4SDH41Hc43w+y36/18k59zidTprLyvjiz2QykWq1Kq1WS263m87r9aoH+v2+lMtlKZVKMp/P9RtxI1Kv13W22+1fQAuOx2Nlcz8stlgsZLVaPXy730PIqnMAc7mc1Go1Zcq+WCzKZrPRGAy73a7uYe6ugvPb7fYRMJ1Oa0kElsulrNdr2e12Gsvn8w7gK4YvAbPZrDb+Vcn0B1BKG41GCj4cDvViziQSCefytwELhYJMp1MFpd+sxioejz8DZjIZ56O7R6g/GAx0D0MUbzab2u9KpSKBQECto4CWFIlEtIfmKyaioDwCYQ322IjL+cYKc7/f/wyYTCYVlNJjsZgeNCPDxhj+K8o9ICxIhAUTpc02Znp7NUxaREXRaPS5h9jGbuESppmVXvV6PeepUbpNd+5bKlMy7O25cVmn01HmxMLhsJP7tm1SqZSueJAVpSkTcGIfMaTcYDAoHo9HvF6v+Hw+XVGaN07uR4AI0mg0lBEA2In9bDbTPa746KXQJ1Q3wUjGAYAhHA75GJCeIQiJWMt+mWAeCoWeRSHB3O4GRAje71/GRm2HoTv4atjbdv9/P218A5OZ+WuA4GWHAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="OAuth Flow"\n        title=""\n        src="/static/4c376e1b3cb4e308ba8e411f12820616/2d920/oauthflow.png"\n        srcset="/static/4c376e1b3cb4e308ba8e411f12820616/772e8/oauthflow.png 200w,\n/static/4c376e1b3cb4e308ba8e411f12820616/e17e5/oauthflow.png 400w,\n/static/4c376e1b3cb4e308ba8e411f12820616/2d920/oauthflow.png 536w"\n        sizes="(max-width: 536px) 100vw, 536px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.p,null,"What's happening here? Let's go step by step."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"First, the client (frontend) navigates to a route designated for the github login. Say, '/login/github'"),"\n",l.createElement(t.li,null,"When this route is fetched from the server (GET request to the server), the server redirects the user to a special github.com route where he can authorize the application. The route is of the form: ",l.createElement(t.code,null,"https://github.com/login/oauth/authorize?client_id=GITHUBCLIENTID&redirect_uri=/login/github/callback"),". Here, the user will login into github (if not already logged in), and on the next page, authorize the application to his information."),"\n",l.createElement(t.li,null,"Once the user accepts, the Github api sends a request to the redirect_uri specified in the earlier request (/login/github/callback in this case). The request gives us a ",l.createElement(t.strong,null,"code")," as a query parameter. We extract this code. This will be used later for getting user data."),"\n",l.createElement(t.li,null,"Next, we send a request to the GET endpoint ",l.createElement(t.code,null,"https://github.com/login/oauth/authorize"),". As query params, we send our client id and client secret (which we generate in our Github account) as well as the code we acquired in the last step. Here, at this step we can be assured that the returned data will be valid as it comes directly from Github."),"\n",l.createElement(t.li,null,"The above request gets us a response in the following form: ",l.createElement(t.code,null,"access_token=e72e16c7e42f292c6912e7710c838347ae178b4a&token_type=bearer"),". The server needs to extract the access_token from this request, and use it for it's final request for data."),"\n",l.createElement(t.li,null,"Now, the server sends a GET request to the endpoint ",l.createElement(t.code,null,"https://api.github.com/user"),". With the authorization header set, something like: ",l.createElement(t.code,null,"Authorization: token e72e16c7e42f292c6912e7710c838347ae178b4a")),"\n",l.createElement(t.li,null,"The response to this request is: MAGIC. No, it's the user data! That's what we wanted all along, right. No need to manage it yourself, just let Github handle enough."),"\n"),"\n",l.createElement(t.p,null,"That was simple enough to understand, wasn't it?"),"\n",l.createElement(t.p,null,"Let's see how you'd implement Github OAuth in your own Golang backend."),"\n",l.createElement(t.h2,null,"Register a Github OAuth application and initial setup"),"\n",l.createElement(t.p,null,"In your Github account, navigate to Settings > Developer Settings > OAuth Apps, and click on New OAuth App."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/d7c2a6a00d14164e884ad546500add8c/8802b/oauthapp.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 26.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR42o1POwrCQBDN/QsrwdJKsPUAHkEQyxCNECxsksjuxNlP9jkbSUwkggOPgfm8T/K0AU92IE3QgrZt0VcIYcB3/dolzIyqruG8Gw7nnp1zsEZgrXSDMBKeEhKhrCoYOYruesLYiaJr3TkvbgWy/IL0nCHNrygVSzIrybSY8R/CqExNAyULZjNR83JoZQ/R2GV7LA5rLI8brE5b3Kns5vF/nCrBn0W2wcOoN1jBh/nIL7r2hfpqCA2IAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="New OAuth App"\n        title=""\n        src="/static/d7c2a6a00d14164e884ad546500add8c/5a190/oauthapp.png"\n        srcset="/static/d7c2a6a00d14164e884ad546500add8c/772e8/oauthapp.png 200w,\n/static/d7c2a6a00d14164e884ad546500add8c/e17e5/oauthapp.png 400w,\n/static/d7c2a6a00d14164e884ad546500add8c/5a190/oauthapp.png 800w,\n/static/d7c2a6a00d14164e884ad546500add8c/8802b/oauthapp.png 1135w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.p,null,"Then, fill in the necessary details and proceed. Do note that the URL you fill in matters. I will be running my app on localhost:3000 and hence use the below URLs. Still, you can always come back and change this later (as we will do later)."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/aee9d30bce003b4c2905b95eec85cef2/d2c2a/registernewapp.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 69%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcUlEQVR42p2TS0sDMRSF+/9/gjuXLsSF7lwouBVEEBHUqbS2857MZJJ5JjneG2qRiu3YwEcgJGfuvefMbBhGNE0LrRs0bYvW0/3a+d4UZqBVliU+V2sIIZDnBZIkRRTHiKIIq3WIJE0xdXnBqpIkkCLLCnRdD0dn1jqMxsLQ/hPn/mYrmFcaL0GIMNOIRYe46JCIHkVtIJT1FESl7fbh3gqVUtRmhkpKqrDb0B98/KeglDUWyxXWYYS6Vpv2rG95l0kVsst5ISDKChmZwqIVfaTvB39pd04HBdllro7djOKE7P8WwnEttzQzdjgjsYhmKZWmsx7DOB4nyC0LUaKk+LAx3LImUUVhP0qwoJbf53N8LBZ4C+Y+5JxNS8YwbrNbn8MJgs5QiJsRpiUag5oM4b9G1APlb/RI1VK8tIcTsFfwbnmPk8cznD5deFYyAxs8+ug4D4sYYzz73PaCD8kzzl+vcRXc4jK4QdpU4CIc/h/sL64oRd8qk/26AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Register New App"\n        title=""\n        src="/static/aee9d30bce003b4c2905b95eec85cef2/5a190/registernewapp.png"\n        srcset="/static/aee9d30bce003b4c2905b95eec85cef2/772e8/registernewapp.png 200w,\n/static/aee9d30bce003b4c2905b95eec85cef2/e17e5/registernewapp.png 400w,\n/static/aee9d30bce003b4c2905b95eec85cef2/5a190/registernewapp.png 800w,\n/static/aee9d30bce003b4c2905b95eec85cef2/d2c2a/registernewapp.png 929w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.p,null,"You should now be able to acquire a Client ID and Client Secret. In your project directory, create a .env file, and store in it these values in the form below. (P.S. - Do not forget to add .env to your .gitignore file if you intend to push this project to version control later)."),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"CLIENT_ID=xxxxxxxxxxxxxxxxxxxx\nCLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")),"\n",l.createElement(t.p,null,"There we go. We are now setup and ready to code the implementation!"),"\n",l.createElement(t.h2,null,"Implementing authentication with a Go backend"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Disclaimer before we continue"),": If you are proceeding to read beyond here, I am hoping you have some basic understanding of how Go code is structured, and the basics of it's functioning and working principles (like, for example, how Go does not do any JS-like magic for us). Still, even if you don't, you might want to continue to be able to get a basic gist of how OAuth is actually implemented. I hope my comments and explanations will help you for the same! Let's start."),"\n",l.createElement(t.p,null,"Before we continue, let me clarify that I did go back and change the URLs in my GIthub OAuth page to the following:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 623px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/5bbeaee5e7cd8fc84f1e6025aa11ee58/6114d/updatedappurls.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 82.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAACD0lEQVR42p1Uy47UMBDM38IRCT6AG9Ke94jgAreFP+AAfMAegNuuRGbiJM7bSew8nKTodpRhZ2cXzWKpZFtKqruru+zd3N7it+8jECGCIIAdBiwAlmX5C74/gvvLKyuFKE7QakM/A3aajzCM9gSjnVA3LVTdOBIOeiDMixJpVrgPKlWjKCvkeYmyWs/DMLpA87wcYaJg8zyfZiiTBFmWQyYpasqW/7bW0g+Tw93o5ywvjGLs9gFpGCHLC2jTuQyYZ8vsvgwbOMsTwpgyZA3DSEIQeRDGTk/ddetOAVizh2CpghNCRboxWMOmbUm7CgXp6s4l7/ppJfv+DiIMIaVELFPsA4GOsvvf5TEJ6+jKJR190jOWyVFpTyLkWVpnap0rpda76XsH1vEhrR4l1FqjabQjc2fSrNUrKqWQFwWMOV8Cj0dGCIHIlcz2E7QLGGrKtlYr3sFmTSwn9nNzKMLI6ce7vxeuMQGdYxp2DsIOYldsw/7POYzSBEISaRxDZil21PEkzZCm5B5qjkxLhLlBVlskykJWI1RjDl6uCR1pfSDERGlPbIkVC+k/cXcpk8GOGCgLY4G2nwgz2m5y/u7pVer7wem7+n19mbxnX17j1fcLvPj6Bi+/XeA53W+KHVAbdOTtnoZ7KBUFGc9ryuX1R7z7+Qlvf1zh/a/PuLz+AFEnmJVGR47p6eHg3Y7nEf4BWOAj/SD/wG0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Updated App URLs"\n        title=""\n        src="/static/5bbeaee5e7cd8fc84f1e6025aa11ee58/6114d/updatedappurls.png"\n        srcset="/static/5bbeaee5e7cd8fc84f1e6025aa11ee58/772e8/updatedappurls.png 200w,\n/static/5bbeaee5e7cd8fc84f1e6025aa11ee58/e17e5/updatedappurls.png 400w,\n/static/5bbeaee5e7cd8fc84f1e6025aa11ee58/6114d/updatedappurls.png 623w"\n        sizes="(max-width: 623px) 100vw, 623px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.p,null,"Inside your project directory run"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"go mod init github.com/sharmarajdaksh/github-oauth-go\n")),"\n",l.createElement(t.p,null,"Of course, replace the github username and reponame with your own."),"\n",l.createElement(t.p,null,"Now, create main.go and let's start with the necessary packages and imports."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'package main\n\nimport (\n\t"bytes"\n\t"encoding/json"\n\t"fmt"\n\t"io/ioutil"\n\t"log"\n\t"net/http"\n\t"os"\n\n\t"github.com/joho/godotenv"\n)\n')),"\n",l.createElement(t.p,null,"We define an init function, which will automatically execute before the main function. Inside it, we will simply load up the environment variables from the .env file we created earlier. If it doesn't exist, the code panics."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'func init() {\n\t// loads values from .env into the system\n\tif err := godotenv.Load(); err != nil {\n\t\tlog.Fatal("No .env file found")\n\t}\n}\n')),"\n",l.createElement(t.p,null,"In out main function, we'll set up our server to listen on port 3000. We define 4 routes: '/', '/auth/github', '/auth/github/callback', and '/loggedin'. Their purpose should be self explanatory. Let's see main."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'func main() {\n\n\t// Simply returns a link to the login route\n\thttp.HandleFunc("/", rootHandler)\n\n\t// Login route\n\thttp.HandleFunc("/login/github/", githubLoginHandler)\n\n\t// Github callback\n\thttp.HandleFunc("/login/github/callback", githubCallbackHandler)\n\n\t// Route where the authenticated user is redirected to\n\thttp.HandleFunc("/loggedin", func(w http.ResponseWriter, r *http.Request) {\n\t\tloggedinHandler(w, r, "")\n\t})\n\n\tfmt.Println("[ UP ON PORT 3000 ]")\n\tlog.Panic(\n\t\thttp.ListenAndServe(":3000", nil),\n\t)\n}\n')),"\n",l.createElement(t.p,null,"Each ",l.createElement(t.code,null,"HandleFunc")," call requires a Handler as the second argument. We'll see their implementation below. Interesting here is the ",l.createElement(t.code,null,"HandleFunc")," for the ",l.createElement(t.code,null,"/loggedin")," route. We implement it differently simply to allow us to pass data to the handler from elsewhere (as we will later). The actual ",l.createElement(t.code,null,"loggedinHandler")," is simple:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'func loggedinHandler(w http.ResponseWriter, r *http.Request, githubData string) {\n\tif githubData == "" {\n\t\t// Unauthorized users get an unauthorized message\n\t\tfmt.Fprintf(w, "UNAUTHORIZED!")\n\t\treturn\n\t}\n\n    // Set return type JSON\n\tw.Header().Set("Content-type", "application/json")\n\n\t// Prettifying the json\n\tvar prettyJSON bytes.Buffer\n\t// json.indent is a library utility function to prettify JSON indentation\n\tparserr := json.Indent(&prettyJSON, []byte(githubData), "", "\\t")\n\tif parserr != nil {\n\t\tlog.Panic("JSON parse error")\n\t}\n\n\t// Return the prettified JSON as a string\n\tfmt.Fprintf(w, string(prettyJSON.Bytes()))\n}\n')),"\n",l.createElement(t.p,null,"All we do here is return prettified JSON data which is passed to it from elsewhere if provided, otherwise it returns an unauthorized message."),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"rootHandler")," is even simpler: It merely returns an anchor tag linking to ",l.createElement(t.code,null,"/login/github"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'func rootHandler(w http.ResponseWriter, r *http.Request) {\n\tfmt.Fprintf(w, `<a href="/login/github/">LOGIN</a>`)\n}\n')),"\n",l.createElement(t.p,null,"Before proceeding with the actual implementation of OAuth login, we define two utility functions that simply return the client id and client secret environment variables. As an alternative to this, you may have had these as global variables, and that's a perfectly acceptable approach."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'func getGithubClientID() string {\n\n\tgithubClientID, exists := os.LookupEnv("CLIENT_ID")\n\tif !exists {\n\t\tlog.Fatal("Github Client ID not defined in .env file")\n\t}\n\n\treturn githubClientID\n}\n\nfunc getGithubClientSecret() string {\n\n\tgithubClientSecret, exists := os.LookupEnv("CLIENT_SECRET")\n\tif !exists {\n\t\tlog.Fatal("Github Client ID not defined in .env file")\n\t}\n\n\treturn githubClientSecret\n}\n')),"\n",l.createElement(t.p,null,"Now, let's look into our ",l.createElement(t.code,null,"githubLoginHandler")," which handles the ",l.createElement(t.code,null,"/login/github")," route."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'func githubLoginHandler(w http.ResponseWriter, r *http.Request) {\n\t// Get the environment variable\n    githubClientID := getGithubClientID()\n\n    // Create the dynamic redirect URL for login\n\tredirectURL := fmt.Sprintf(\n\t\t"https://github.com/login/oauth/authorize?client_id=%s&redirect_uri=%s",\n\t\tgithubClientID,\n\t\t"http://localhost:3000/login/github/callback"\n\t)\n\n\thttp.Redirect(w, r, redirectURL, 301)\n}\n')),"\n",l.createElement(t.p,null,"Very simple, isn't it? We just redirect the user to another URL, and forget about it. That is all this handler needs to do. These URLs should probably have not been hardcoded, but for this small example, let's accept them as they are. Implementing this method means that when the user visits ",l.createElement(t.code,null,"/login/github"),", they should see the Github login screen or the authorize app page."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 528px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/e6ef9da00af72daebb3f1abd0bc5c354/4af8e/logintogithub.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 159%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAAACXBIWXMAAAsTAAALEwEAmpwYAAADHUlEQVR42r1WSW/TQBTuD+MfcEJCQiqqVMRyLCqHLlKliuXCobfeOfXGJZeeAaVIIEhbUQIqJU3iLM7ixLvHntgf702ayq6arZWw9OnNeGa+efO2mYUwDDEJUkpYloUgCBBFEabNXxg3IIRAHMdoNpvY29tDPp9X5Lci5K9YLGJ/fx+5XE5peWPCNLGu6+j3+0pD7t+KMIxCDAbxTMfNEPLOcjBAkiQZxAwZkj15DNkxsvFEwgERZj5e6LQQN38g6Z4hifwrw8mMhKwKC0n/Tj+gu3MXTu4lQOS3ImQZfn+Pzps7sN49QeKOCJM5CS8mK2fYbcheFaJbhu/YZNMbasjt83IZ1VodtVoNxV+/UTg8QrtrzE8YkzR6PWiahvNKFZ1OB5VKBWd/Szg5+QnTsuc/clqLkeQwYaRDZyqh47iUFSb6pgnX9VSGmKaFXq8Px3Xn8zJng95qo1avo95oomv0lP24X65oaOpt0vDCWYNYtSdrSMdxSQs2fJdQqWqkqZXVClkTRNHE1JPwXAe2bSlIGZGDJK2OlTn6noTtS5gEbkdyEiEhoiNXajpOSxpK1QYC8pGQCfwogSNinLVC/CGUOkPpilhtKq6vNgJ+GKPc8VButHHe6OBM01HvkHPCIaFPGvlRrDaxqd/zBuM1ZMJQDhBQXY1SEII0JElTQMpcgvsBbTSeUPCRI2z/3sX9by+wVNjAYmENy0dbWD15i6fH29Rfx0PC0uEm7n1dQaFfBMgsgQjGFFgifH28i8VPq3h8sIHl/Bqefd7CVmEHz7+8ov46Hh2s09gmHnxcwZFBhPE4QsHVObrMjMzHFeGa31yQxaQrIKDQ4d083yP4cD2XwO1gCLqk/GDYZslzr94xmTgcoU6Z0SBwhmjVKpqGi1LLg0YRUCOUdA+OJy7XTdFwSDqUHJ9CYTR2FWKWW0+MIFLt1FhaTr1GOa4U+BlyEWMy9Y+fI5Iw7lmSIeQFLkWx5QglTZeyJxj22WY+OYrLm207Sk4nJC0sN0Cr75Mk5xhDqfd8tMwAtuNQSTNUWTOoPv7/I4dTDD7LU+QfdBKb3erELkAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Login to Github"\n        title=""\n        src="/static/e6ef9da00af72daebb3f1abd0bc5c354/4af8e/logintogithub.png"\n        srcset="/static/e6ef9da00af72daebb3f1abd0bc5c354/772e8/logintogithub.png 200w,\n/static/e6ef9da00af72daebb3f1abd0bc5c354/e17e5/logintogithub.png 400w,\n/static/e6ef9da00af72daebb3f1abd0bc5c354/4af8e/logintogithub.png 528w"\n        sizes="(max-width: 528px) 100vw, 528px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.p,null,"If the user is already logged in, or after they log in, they will see this screen:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 783px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/50524c739ffbb5d3b568d8f3a42ca3e3/e51a6/authorizeapp.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 99%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjUlEQVR42o1UW0/UQBjlz/lLfDJeHk0MPBCRB0OiYvSVhJhojNF3iSAgKMELEDZBjLqwC213t9vbbtuZdqbH7xtYXWhxmeRkepmefnO+c2YsyxVKUPof6D7PNXKloDTNdK91AVn1HWGs/FBDJSF0t448iehDDZFlUET+/OUrTE3fx8FhAwUAmeUjCGlBTiuz/RW4M1eAxjZ+RQ7mf77Bzk4Nc/PPsPd9H48ePwWPVGajKqQ/aiJs/YbYfAEVWBC0PV9G8IMIyytreLvwDkvLq4ZQjCY8BZFEIofrBYao30/Q68d0HZpZa12pX4mQNRno4rpdHDaaaB5bsFttWLZD90eIiPAisjOELHpRFKaD3E1N1yz8AIPB1akhcPdLhDmRxUmKb1t76HRc2FRNuxui3kqw1whQt6nbQkCSZudHrnR1hZKsYTtteJ6PdrtjiMNe3yAIe4jjBELIyxMKKXHYbMJpt2g+wrFtwQsCqjw2yFQOFkEV6i90oasJuRGsR2mcF7BiVBJytNJc4otTw/rxFj5ZjG18dnYNNs1cw6a9a55vWDv4cPQVP7wDcB3DiRmTZGalCgRpD+NrD3FtcRI3lqZwc+ke7qw9wMTHWUysz2Jy4wlur87g+uJd3Ho/jasL45irvT4xeJaVt6wrtiwTCb8TIKSORy7lW+nLbXmgIXtPsdBaGaRSIIgiQgg/DEw0uRF6aE2lDxkpWYJjFoQRxSsxP+GYMVJBpw0Znp93/QCeTxX34jPJKtuGXnBW7RZ50PXMx2x2p+1Spj24Xd+Qu+RTi/waRD2z3QsJB4nhSjiG3PkkFejHJwdDRAY/kaYwOK/d/0+bIRm4yjgRZhan1cjLHA4XgSsZYNRaJvwDHB7+IAL3BeQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Authorize app"\n        title=""\n        src="/static/50524c739ffbb5d3b568d8f3a42ca3e3/e51a6/authorizeapp.png"\n        srcset="/static/50524c739ffbb5d3b568d8f3a42ca3e3/772e8/authorizeapp.png 200w,\n/static/50524c739ffbb5d3b568d8f3a42ca3e3/e17e5/authorizeapp.png 400w,\n/static/50524c739ffbb5d3b568d8f3a42ca3e3/e51a6/authorizeapp.png 783w"\n        sizes="(max-width: 783px) 100vw, 783px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.p,null,"Once the user accepts, a request is sent by Github to the route ",l.createElement(t.code,null,"/login/github/callback"),", which is handled by the ",l.createElement(t.code,null,"githubCallbackHandler"),". It does a lot, but don't worry, we'll go through it step by step. Here is the code for the handler:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'func githubCallbackHandler(w http.ResponseWriter, r *http.Request) {\n\tcode := r.URL.Query().Get("code")\n\n\tgithubAccessToken := getGithubAccessToken(code)\n\n\tgithubData := getGithubData(githubAccessToken)\n\n\tloggedinHandler(w, r, githubData)\n}\n\n')),"\n",l.createElement(t.p,null,"Believe me, it does a lot. I've just extracted major parts to the functions ",l.createElement(t.code,null,"getGithubAccessToken")," and ",l.createElement(t.code,null,"getGithubData"),". Here's how it works:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"We extract the ",l.createElement(t.code,null,"code")," query parameter sent by github to this route."),"\n",l.createElement(t.li,null,"This code is sent to ",l.createElement(t.code,null,"getGithubAccessToken"),", which exchanges the code along with our github client id and secret to get an authentication token and returns it."),"\n",l.createElement(t.li,null,"The returned authentication token is then passed to ",l.createElement(t.code,null,"getGithubData"),", which returns the user data acquired from github."),"\n",l.createElement(t.li,null,"We then execute the ",l.createElement(t.code,null,"loggedinHandler")," with the ",l.createElement(t.code,null,"Request")," and ",l.createElement(t.code,null,"ResponseWriter"),", passing the ",l.createElement(t.code,null,"githubData")," as a third argument."),"\n"),"\n",l.createElement(t.p,null,"The concept is simple to understand with all this abstractions, and we have now covered our handlers as they work."),"\n",l.createElement(t.p,null,"Now, let's see how we will implement ",l.createElement(t.code,null,"getGithubAccessToken")," and ",l.createElement(t.code,null,"getGithubData"),", the functions which do the actual heavy lifting behind the scenes."),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"getGithubAccessToken")," received the code returned by Github as an argument, and is responsible to use it, along with the Github client id and client secret, to get a unique access token which will finally allow us to get the necessary user data. Let's see how this method works in code."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'func getGithubAccessToken(code string) string {\n\n\tclientID := getGithubClientID()\n\tclientSecret := getGithubClientSecret()\n\n    // Set us the request body as JSON\n\trequestBodyMap := map[string]string{\n\t\t"client_id": clientID,\n\t\t"client_secret": clientSecret,\n\t\t"code": code\n\t}\n\trequestJSON, _ := json.Marshal(requestBodyMap)\n\n    // POST request to set URL\n\treq, reqerr := http.NewRequest(\n\t\t"POST",\n\t\t"https://github.com/login/oauth/access_token",\n\t\tbytes.NewBuffer(requestJSON)\n\t)\n\tif reqerr != nil {\n\t\tlog.Panic("Request creation failed")\n\t}\n\treq.Header.Set("Content-Type", "application/json")\n\treq.Header.Set("Accept", "application/json")\n\n    // Get the response\n\tresp, resperr := http.DefaultClient.Do(req)\n\tif resperr != nil {\n\t\tlog.Panic("Request failed")\n\t}\n\n    // Response body converted to stringified JSON\n\trespbody, _ := ioutil.ReadAll(resp.Body)\n\n\t// Represents the response received from Github\n\ttype githubAccessTokenResponse struct {\n\t\tAccessToken string `json:"access_token"`\n\t\tTokenType   string `json:"token_type"`\n\t\tScope       string `json:"scope"`\n\t}\n\n    // Convert stringified JSON to a struct object of type githubAccessTokenResponse\n\tvar ghresp githubAccessTokenResponse\n\tjson.Unmarshal(respbody, &ghresp)\n\n    // Return the access token (as the rest of the\n\t// details are relatively unnecessary for us)\n\treturn ghresp.AccessToken\n}\n')),"\n",l.createElement(t.p,null,"There we have it. It's fairly simple in what it does:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Form a JSON object that has the code, our github client id, and out client secret."),"\n",l.createElement(t.li,null,"Send the JSON as body for a POST request."),"\n",l.createElement(t.li,null,"Get the JSON response, extract from it the AccessToken, and return it (as a string)."),"\n"),"\n",l.createElement(t.p,null,"For people coming from, say, Javascript/Nodejs, you might be thinking- this could've been done in 10 lines of Javascript. I don't disagree. That's just how Go is. It is low level enough to not do any magic for you, but high level enough to provide extremely powerful libraries for tasks like http requests and JSON manipulation."),"\n",l.createElement(t.p,null,"At this point, now, we have our AccessToken. We are nearly done! The last thing we need to do is use the access token we received and to tell Github we're authorized to fetch the current user's data. This happens in ",l.createElement(t.code,null,"getGithubData"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'func getGithubData(accessToken string) string {\n    // Get request to a set URL\n    req, reqerr := http.NewRequest(\n\t\t"GET",\n\t\t"https://api.github.com/user",\n\t\tnil\n\t)\n\tif reqerr != nil {\n\t\tlog.Panic("API Request creation failed")\n\t}\n\n    // Set the Authorization header before sending the request\n    // Authorization: token XXXXXXXXXXXXXXXXXXXXXXXXXXX\n\tauthorizationHeaderValue := fmt.Sprintf("token %s", accessToken)\n\treq.Header.Set("Authorization", authorizationHeaderValue)\n\n    // Make the request\n\tresp, resperr := http.DefaultClient.Do(req)\n\tif resperr != nil {\n\t\tlog.Panic("Request failed")\n\t}\n\n    // Read the response as a byte slice\n\trespbody, _ := ioutil.ReadAll(resp.Body)\n\n    // Convert byte slice to string and return\n\treturn string(respbody)\n}\n')),"\n",l.createElement(t.p,null,"There we are. A simple GET request gets back to us the user's data in the response body, which we may use as we like.\nIn our case, as you see in the ",l.createElement(t.code,null,"githubCallbackHandler")," method, we send this data to the ",l.createElement(t.code,null,"loggedInHandler"),", and this data is displayed on the '/loggedin' route. For me, it was something like this:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/e045148b69de97dcba8f747d108109bd/fe238/datajson.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 69%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAABu0lEQVR42pVUabOiMBB8///XiSWHHCoERShBIYAHR+/MIG/dffU+kKqpxMTpdHdav7TWaNsGTdPg+Xzi9Xrh8XjIPAwD+r5fVF+g0bYtjscjDocQ+90O6fmM4npFe78L6DiO3zVfMgw9dY74fwig1hU2mw32+z12BHiMY0RRhDCMkOcFbrcbbnQBz3Vd40pr7um6/jdADdd1oWIFpRSCIIAf+PD9ANvtFpZlwbEdUVFVlYBxT0PKuq57Mx7+AjZ0KzeFYYjknMD3PDiOQ6xNAnTkzN26osIwDNi2LeemaSJJEhRFIb5/AGpp9jyffDwIk7nJIYa8tgl0Alxhbaxljy06s98EOH5KZoYmfVmpGCpSBBiLlw6xYys815OZQSzLJPm2PCCDsbdzIr4B2Whmw36x7DzPJUZcfNa8qybf2Dv2saSq3sV7/wDyBvvBcjk2sy93ig3fvmS8GWox/nQ6kTwXMUun1+bPHJV5cA4ns6ZMzvO0/oxNVYpc8Y2kx5TDLMtITinsFzNkH5ghA2ZptljmD0D+6a1WhgSZmaVpSpWJ5MvlsgxwHEZJuta1hLNt7yjL6eWmP452EeAf4rct3DEP4ysAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="User data"\n        title=""\n        src="/static/e045148b69de97dcba8f747d108109bd/5a190/datajson.png"\n        srcset="/static/e045148b69de97dcba8f747d108109bd/772e8/datajson.png 200w,\n/static/e045148b69de97dcba8f747d108109bd/e17e5/datajson.png 400w,\n/static/e045148b69de97dcba8f747d108109bd/5a190/datajson.png 800w,\n/static/e045148b69de97dcba8f747d108109bd/c1b63/datajson.png 1200w,\n/static/e045148b69de97dcba8f747d108109bd/fe238/datajson.png 1401w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.p,null,"In a real app, of course you could done something more useful with this user data: save it to a database, use it in your frontend, or anything else you want."),"\n",l.createElement(t.p,null,"There we have it! We've implemented Github OAuth into our application backend. The complete application code is available to view ",l.createElement(t.a,{href:"https://github.com/sharmarajdaksh/github-oauth-go"},"here"),"."),"\n",l.createElement(t.p,null,"I hope you learnt something new today! The principles discussed here should be effectively transferrable to any other language backend, or even for other OAuth providers like Google or Facebook, although the documentation should be your best friend in those cases."),"\n",l.createElement(t.p,null,"That's it for now, dear reader. Until next time, happy learning."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)},r=n(3735),o=n(3967),c=n.n(o),d=n(3608),u=n(7474),p=n(2228),h=n(4539),g=n(1399),m=n(9878),b=n(6096);const A=e=>{let{data:{mdx:t},children:n}=e;const{theme:i}=l.useContext(p.Z),s=i===r.P,o=l.createElement(b.Z,{title:t.frontmatter.title,description:t.frontmatter.listingContent,additionalKeywords:t.frontmatter.keywords,slug:"/blog/"+t.frontmatter.slug+"/"}),A=l.createElement("main",{className:c()(u.Se,s?null:u.Xe,d._$)},l.createElement(h.Z),l.createElement("section",{className:d.Vi},l.createElement("div",{className:d.Qx,"data-aos":"fade-up","data-aos-duration":"200"},l.createElement("div",{className:d.WE},t.frontmatter.title),l.createElement("div",{className:d.aY},t.frontmatter.listingContent),l.createElement("div",{className:d.Ye},t.frontmatter.date," | ",t.frontmatter.author," |"," ",Math.floor(t.timeToRead)+" minute read"),l.createElement("div",{className:d.qE})),l.createElement("div",{"data-aos":"fade-up","data-aos-duration":"1000"},l.createElement(a.Z,{components:m.Z},n))),l.createElement("div",{className:d.sC}),l.createElement(g.Z));return l.createElement(l.Fragment,null,o,A)};function f(e){return l.createElement(A,e,l.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-templates-blogpost-jsx-content-file-path-src-posts-2020-06-24-index-mdx-cca0e4f8cf5ab1a2c6bc.js.map