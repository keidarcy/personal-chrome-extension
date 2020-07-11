<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="robots" content="none">
    <title>{{ config('app.name', 'Shopify-Darcy-App') }}</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>

<body>
    <div id="app">
    </div>
    <script src="{{ mix('js/app.js') }}" defer="defer"></script>
    <input type="hidden" id="app-config" data-shop="{{ Auth::user() ? Auth::user()->name : '' }}"
        data-api="{{ config('shopify-app.api_key') }}">
</body>

</html>