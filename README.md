#CLiKader CSS Template

This project is not for replacing famous and widely used frontend frameworks such as [BootStrap](https://getbootstrap.com/) or [Foundation](https://foundation.zurb.com/), in fact, I love them :\)

However, their basic settings are not perfect, especially when you see their default template showing on frontend newbie's website as there are some learning curves before putting those frameworks into production works.

I had to implement the same CSS code or modify the sass code again and again before starting every project, and that's how this project was started: I need a small pre-configured set of styles to override the default colors, basic nav bars, better fonts ...

##HOW to Use

There is an [index.html](index.html) file showing all redesigned components, if you found this project at early stage, yes I admit the files and folders are messy, due to the sass watcher watching every file...

Start a project like you usually do, then download this project and put the CSS file after all the frameworks you are using but before your own CSS stylesheet. JS file in this project is not required if you are only looking for styles.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Website</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="Clikader.css">
    
<!-- other things you want to put in head -->
</head>
<body>

<!-- Your body part -->

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="js/Clikader.js"></script>
</body>
</html>

```

##Components

### Colors

- light
- info
- danger
- success
- warning
- dark
- orange
- grey
- pink
- purple

Directly using color class will give all effected elements a hover color and a active color too, if you do not want to assign hover or active state, use the scss variables directly or consider using box color.

```html
<a href="https://google.com" class="info">Google</a>
```

###Box

Yes there is a box(container) class in these famous frameworks too, so don't worry, it's still the same with just smaller padding style.

But just for a quicker setup, there is a .box-center class now that will display things inside the container in the middle of the screen, both horizontally and vertically, so from now on, you don't need to apply three classes for this simple job!

If you are not use to call it a box, call it a container still, `.box-center` and `.container-center` are the same.

```html
<!--BootStrap way to center a container-->
<div class="container justify-content-center align-items-center">
<p>Some of your amazing works...</p>
</div>

My way to center a container
<div class="box-center">
<p>Some of your amazing works...</p>
</div>
```

Want to give some color to your box just like the alert class in BootStrap? No problem at all.

```html
<div class="box box-info">
<p>Some of your amazing works...</p>
</div>

<!--yes the color names remains the same-->
<div class="box box-orange">
<p>Some of your amazing works...</p>
</div>
```

###Button

You know how a button works, no need to explain. Oh, use the colors too.

```html
<button class="button">Submit</button>

<button class="button grey">Reset</button>
```

###Nav Bar

If you are new to BootStrap, you know that manipulating the nav layout is confusing, how on earth should I place my logo on the left and other stuffs on the right?

####Horizontal Nav

```html
<!--Put things on left-->
<nav class="nav box-info">
<a href="#">Link 1</a>
<a href="#">Link 2</a>

<!--Put things on right-->
<nav class="nav-right box-info">
<a href="#">Link 1</a>
<a href="#">Link 2</a>

<!--Put things on middle-->
<nav class="nav-middle box-info">
<a href="#">Link 1</a>
<a href="#">Link 2</a>

<!--Distribute things to take the whole nav bar-->
<!--nav-lr means nav-left-right-->
<nav class="nav-lr box-info">
<a href="#">Link 1</a>
<a href="#">Link 2</a>
</nav>
```

####Vertical Nav

```html
<!--Put things on top-->
<nav class="nav-vertical box-info">
<a href="#">Link 1</a>
<a href="#">Link 2</a>

<!--Put things on bottom-->
<nav class="nav-vertical-bottom box-info">
<a href="#">Link 1</a>
<a href="#">Link 2</a>

<!--Put things on middle-->
<nav class="nav-vertical-middle box-info">
<a href="#">Link 1</a>
<a href="#">Link 2</a>
</nav>
```

Distributing things on nav is great, but they are not distributed equally!

Try the `nav-section`! Width will be calculated automatically (JS file is needed now)

```html
<nav class="nav-lr">
<a class="nav-section" href="#">Link1</a>
<a class="nav-section" href="#">Another Link But Longer</a>
</nav>
```

###Others

`.full-width` is great to force giving your element a full width

`<input>` now gets their new default styles, and remember that because it's a box again, you can apply box colors.

##Why am I Wasting Time to Try This?

Like I said, this project is not for replacing others.

Most of my works are on backend so I sometimes I only need a basic page setup to integrate with backend code and debug my code. As a personal "library", this project will just speed up mocking a simple page.

But if you are a frontend developer, you can still use these code to speed up building a basic layout, for example, my nav class works perfectly with BootStrap's collapse navbar, so you will not give up anything.