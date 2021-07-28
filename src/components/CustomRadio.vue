<script setup>
	import { inject, computed, ref, watchEffect } from 'vue';
	import { context } from './RadioGroup.vue';


	let state = inject(context);
	let props = defineProps(['value', 'defaultData']);

	let data = ref(props.defaultData);
	let selected = computed(() => state.selectedValue === props.value);

	let handleChange = () => state.selectedValue = { value: props.value, data: data.value };
	let change = (value) => handleChange(data.value = value);
</script>

<template>
	<label class='form-check'>
		<input
			class='form-check-input'
			type='radio'
			:checked='selected'
			@click='handleChange'
		/>
		<span class='form-check-label'>
			<slot :disabled='!selected' :data='data' :change='change' />
		</span>
	</label>
</template>
