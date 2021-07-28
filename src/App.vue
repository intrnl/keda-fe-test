<script setup>
	import { ref } from 'vue';

	import RadioGroup from './components/RadioGroup.vue';
	import Radio from './components/Radio.vue';
	import CustomRadio from './components/CustomRadio.vue';

	let value = ref('red');
</script>

<template>
	<pre
		id='result'
		class='p-3 pb-0 mb-0'
		v-text='JSON.stringify(value)'
	/>
	<radio-group v-model='value'>
		<radio value='red'>Red</radio>
		<radio value='blue'>Blue</radio>
		<custom-radio value='custom-text' v-slot='input'>
			<div>Custom text input</div>
			<input
				class='form-control'
				type='text'
				:disabled='input.disabled'
				:value='input.data'
				@input='e => input.change(e.target.value)'
			/>
		</custom-radio>
		<custom-radio value='custom-number' v-slot='input'>
			<div>Custom number input</div>
			<input
				class='form-control'
				type='number'
				:disabled='input.disabled'
				:value='input.data'
				@input='e => input.change(e.target.valueAsNumber)'
			/>
		</custom-radio>
	</radio-group>
</template>
