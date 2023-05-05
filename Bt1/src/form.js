import { useForm } from "react-hook-form";

const MedicalDeclarationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Họ và tên</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Vui lòng nhập họ và tên</span>}
      </div>
      <div>
        <label htmlFor="address">Địa chỉ</label>
        <input
          type="text"
          id="address"
          {...register("address", { required: true })}
        />
        {errors.address && <span>Vui lòng nhập địa chỉ</span>}
      </div>
      <div>
        <label htmlFor="phone">Số điện thoại</label>
        <input
          type="tel"
          id="phone"
          {...register("phone", { required: true, pattern: /^[0-9\b]+$/i })}
        />
        {errors.phone && <span>Vui lòng nhập số điện thoại hợp lệ</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Vui lòng nhập email hợp lệ</span>}
      </div>
      <div>
        <label>Có triệu chứng trong vòng 14 ngày qua?</label>
        <div>
          <input
            type="checkbox"
            {...register("symptoms", { required: true })}
            id="Sốt"
          />
          <label htmlFor="Sốt">Sốt</label>
        </div>
        <div>
          <input
            type="checkbox"
            {...register("symptoms", { required: true })}
            id="Ho"
          />
          <label htmlFor="Ho">Ho</label>
        </div>
        <div>
          <input
            type="checkbox"
            {...register("symptoms", { required: true })}
            id="KhoTho"
          />
          <label htmlFor="KhoTho">Khó thở</label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MedicalDeclarationForm;