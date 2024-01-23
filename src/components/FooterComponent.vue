<template>
    <footer id="footer-wrap" class="pt-3 row-cols-1 m-0 fixed-bottom">
    <div id="copyright-wrap" class="row justify-content-center align-items-center border-top w-100 text-white justify-content-center">
	<div id="copyright" role="contentinfo" class="clr">
		<div class="site-info">
        <div class="footer-logo">
            <img src="https://techclub.tajamar.es/wp-content/uploads/2018/07/escudo-negativo-blog.png" class="logo_img">
        </div>
        <p class="footer-first">© 2024 Tajamar Tech</p>
        <p><strong>Dirección:</strong> Calle Pío Felipe 12, 28038,&nbsp; Madrid <br><strong>Teléfonos:</strong> 91 757 18 17 / 91 478 34 98&nbsp;</p>
        </div>	
        </div>
    </div>
    </footer>
</template>
<script>
export default {
  name: "FooterComponent",
};
</script>

<style>
.entry-footer {
     margin-top: 0px; 
}

.footer-logo {
	float: left;
	margin-right: 15px;
}

.footer-first {
	padding-top: 27px;
	font-size: 14px;
	font-weight: 700;
}

#footer-wrap{
    background-color: rgb(50, 50, 50);
}

[data-bs-theme="light"] #footer-wrap{
    filter: invert(100%);

}

</style>