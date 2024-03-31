<script lang="ts" setup>
const inputValue = ref('small')
</script>

<template>
  <div>
    <div class="flex justify-center py-4">
      <ThemeSelector />
    </div>
    <div class="container mx-auto py-12 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4">
      <fieldset class="flex flex-col gap-4 max-w-[320px] min-w-0 items-center border p-4 rounded-lg">
        <legend class="px-2 font-mono text-base font-semibold">
          Default
        </legend>
        <UiButton size="sm">
          Small
        </UiButton>
        <UiButton>
          Default
        </UiButton>
        <UiButton size="lg">
          Large
        </UiButton>
        <UiButton disabled>
          Disabled
        </UiButton>
        <UiButton size="icon">
          <Icon name="i-ph-heart" />
        </UiButton>
      </fieldset>
      <fieldset class="flex flex-col gap-4 max-w-[320px] min-w-0 items-center border p-4 rounded-lg">
        <legend class="px-2 font-mono text-base font-semibold">
          Secondary
        </legend>
        <UiButton variant="secondary" size="sm">
          Small
        </UiButton>
        <UiButton variant="secondary">
          Default
        </UiButton>
        <UiButton variant="secondary" size="lg">
          Large
        </UiButton>
        <UiButton variant="secondary" disabled>
          Disabled
        </UiButton>
        <UiButton variant="secondary" size="icon">
          <Icon name="i-ph-heart" />
        </UiButton>
      </fieldset>
      <fieldset class="flex flex-col gap-4 max-w-[320px] min-w-0 items-center border p-4 rounded-lg">
        <legend class="px-2 font-mono text-base font-semibold">
          Gray
        </legend>
        <UiButton variant="gray" size="sm">
          Small
        </UiButton>
        <UiButton variant="gray">
          Default
        </UiButton>
        <UiButton variant="gray" size="lg">
          Large
        </UiButton>
        <UiButton variant="gray" disabled>
          Disabled
        </UiButton>
        <UiButton variant="gray" size="icon">
          <Icon name="i-ph-heart" />
        </UiButton>
      </fieldset>
      <fieldset class="flex flex-col gap-4 max-w-[320px] min-w-0 items-center border p-4 rounded-lg">
        <legend class="px-2 font-mono text-base font-semibold">
          Outline
        </legend>
        <UiButton variant="outline" size="sm">
          Small
        </UiButton>
        <UiButton variant="outline">
          Default
        </UiButton>
        <UiButton variant="outline" size="lg">
          Large
        </UiButton>
        <UiButton variant="outline" disabled>
          Disabled
        </UiButton>
        <UiButton variant="outline" size="icon">
          <Icon name="i-ph-heart" />
        </UiButton>
      </fieldset>
      <fieldset class="flex flex-col gap-4 max-w-[320px] min-w-0 items-center border p-4 rounded-lg">
        <legend class="px-2 font-mono text-base font-semibold">
          Borderless
        </legend>
        <UiButton variant="boderless" size="sm">
          Small
        </UiButton>
        <UiButton variant="boderless">
          Default
        </UiButton>
        <UiButton variant="boderless" size="lg">
          Large
        </UiButton>
        <UiButton variant="boderless" disabled>
          Disabled
        </UiButton>
        <UiButton variant="boderless" size="icon">
          <Icon name="i-ph-heart" />
        </UiButton>
      </fieldset>
    </div>
    <div class="container mx-auto py-12 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4">
      <fieldset class="flex flex-col gap-4 max-w-[320px] min-w-0 items-center border p-4 rounded-lg">
        <legend class="px-2 font-mono text-base font-semibold">
          Input
        </legend>
        <UiInput model-value="Default" />
        <UiInput model-value="Disabled" disabled />
      </fieldset>
    </div>
  </div>
</template>
