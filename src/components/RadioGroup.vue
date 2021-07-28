<script>
	export let context = Symbol('radio-group__state');
</script>

<script setup>
	import { provide, reactive, computed } from 'vue';


	let emit = defineEmits(['update:modelValue']);
	let props = defineProps(['modelValue']);

	let selectedValue = computed({
		get: () => typeof props.modelValue === 'object'
			? props.modelValue.value
			: props.modelValue,
		set: (v) => emit('update:modelValue', v),
	});

	let state = reactive({ selectedValue });
	provide(context, state);
</script>

<template>
	<fieldset class='p-3'>
		<slot />
	</fieldset>
</template>
