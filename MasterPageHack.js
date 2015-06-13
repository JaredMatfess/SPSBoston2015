<script src="/sites/ctspug/SiteAssets/jquery-1.11.2.min.js"></script>
<script type="text/javascript">
        $(document).ready(function(){
        if(window.location.pathname.indexOf("/_layouts/15/Upload") != -1){
        	//console.log(window.parent);
            $("input[type='checkbox']").attr('checked',false);
            $("input[type='checkbox']").hide();
            $("label").hide();
            $("a").hide();
            $("input[type='submit']").hide();
            $("input[type='text']").hide();
            $("input[type='text']").val("/");
			$(".ms-standardheader").hide();
        
        
        }
        });
</script>
