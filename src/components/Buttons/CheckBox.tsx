type CheckboxProps = {
  isChecked: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
  labelColor?: string;
  uncheckedColor?: string;
};

export default function Checkbox({
  isChecked,
  onChange,
  label,
  labelColor,
  uncheckedColor,
}: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-blue-600"
        checked={isChecked}
        onChange={() => onChange && onChange(!isChecked)}
      />
      <label
        className={`ml-2 ${isChecked ? labelColor : uncheckedColor}`}
        onClick={() => onChange && onChange(!isChecked)}
      >
        {label}
      </label>
    </div>
  );
}
