<?php

$v8 = new V8Js();

$react = [
	file_get_contents(__DIR__.'/node_modules/react/dist/react.min.js'),
	file_get_contents(__DIR__.'/node_modules/react-dom/dist/react-dom.min.js'),
  file_get_contents(__DIR__.'/dist/bundle.js'),
  'renderToString(React.createElement(MyApp, { location: "' . $_SERVER['REQUEST_URI'] . '" }))',
];

try {
  $reactStr = $v8->executeString(implode(PHP_EOL, $react));
} catch (Exception $e) {
  echo '<h1>', $e->getMessage(), '</h1>';
  echo '<pre>', $e->getTraceAsString(), '</pre>';
  exit;
}

?><!doctype html>
<html>
	<head>
		<title>My Universal App</title>
		<link rel='stylesheet' href='dist/bundle.css'>
	</head>
	<body>
		<div id='app'><?= $reactStr; ?></div>
		<script src='dist/bundle.js'></script>
	</body>
</html>