<script>
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let locale = urlParams.get('locale');
if (locale == null) {
    const localstr = navigator.language || navigator.userLanguage;
    locale = localstr.substring(0,2);
}
if (locale === 'zh'){
    window.location = '/uniloop/zh/';
} else {
    window.location = '/uniloop/en/';
}

</script>